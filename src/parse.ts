import { Schema } from './interfaces/schema';
import {
  Config,
  HelpOptHook,
  VersionOptHook,
  ParserErrorsHook,
  DEFAULT_HELP_OPT_HOOK_OPT_NAME,
  DEFAULT_HELP_OPT_HOOK_EXIT_CODE,
  DEFAULT_VERSION_OPT_HOOK_OPT_NAME,
  DEFAULT_VERSION_OPT_HOOK_EXIT_CODE,
  DEFAULT_PARSER_ERROR_HOOK_EXIT_CODE,
} from './interfaces/config';
import {
  ParsedInput,
  CmdName,
  OptName,
  OptLongName,
} from './interfaces/parsed_input';
import { parseSchema } from './parse_schema';
import { parseOpt } from './parse_opt';
import { parseLongOpt } from './parse_long_opt';
import { OptMap } from './classes/opt_map';
import {
  ParserError,
  ArgFilterError,
  CmdExpectedError,
  InsufficientArgsError,
  ExcessArgsError,
  UnknownCmdError,
} from './classes/errors';

/**
 * Starting index of command line arguments in `process.argv`.
 */
const ARGS_INDEX = 2;

/**
 * This flag terminates all arguments. Anything after this flag are treated as
 * non-option arguments.
 *
 * Note: If this flag is found after an option that requires an argument, it
 * will be treated as an argument for that option.
 *
 * Examples:
 * - "-a --"
 * - "-a--"
 * where -a requires an argument.
 */
const STOP_PROCESSING_OPTS_FLAG = '--';

/**
 * Regex pattern for an option. Since the space between an option and its
 * argument is optional, the pattern matches anything that starts with a single
 * dash followed by an alphanumeric character and then followed by anything
 * else.
 *
 * E.g.:
 * If "-a" requires arguments and the input is "-a50.00", then "50.00" would
 * be considered the option's argument (i.e. therefore the regex has to match
 * anything after even though they're not alphanumeric characters).
 */
const OPT_REGEX = /^-[a-zA-Z\d].*$/;

/**
 * Regex pattern of a long option and its argument (if present).
 */
const LONG_OPT_REGEX = /^--[a-zA-Z\d]+(-([a-zA-Z\d])+)*(=.*)?$/;

/**
 * Parse CLI arguments.
 * @param schema - CLI schema.
 * @param config - CLI config.
 */
export const parse = (schema?: Schema, config?: Config): ParsedInput => {
  const cfg = config || {};
  const parsedSchema = parseSchema(schema || {});
  const tokens = (() => {
    if (Array.isArray(cfg.argv)) {
      return cfg.argv;
    } else if (cfg.argv) {
      return cfg.argv.split(' ').filter((t) => t);
    }
    return process.argv.slice(ARGS_INDEX);
  })();

  // Keep track of unknown opts so that only unique instances of
  // "UnknownOptError" are generated.
  const unknownOpts: Set<OptName | OptLongName> = new Set();

  const errors: ParserError[] = [];
  const cmds: CmdName[] = [];
  const opts = new OptMap();
  const args: unknown[] = [];

  let parsedOptSchemaMap = parsedSchema.opts;
  let parsedCmdSchemaMap = parsedSchema.cmds;
  let minArgs = parsedSchema.minArgs;
  let maxArgs = parsedSchema.maxArgs;
  let argFilter = parsedSchema.argFilter;
  let expectsCmd = parsedSchema.expectsCmd;
  let unknownCmdReceived = false;
  let stillAcceptingOpts = true;
  let argPos = 0;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    // (1) STOP PROCESSING ARGUMENT FLAG
    if (stillAcceptingOpts && token === STOP_PROCESSING_OPTS_FLAG) {
      stillAcceptingOpts = false;
      continue;
    }

    // (2) OPTIONS
    if (stillAcceptingOpts && OPT_REGEX.test(token)) {
      const { valid, nextTokenConsumed } = parseOpt(
        parsedOptSchemaMap,
        errors,
        opts,
        unknownOpts,
        token,
        tokens[i + 1],
      );
      if (valid && nextTokenConsumed) {
        i++;
      }
      if (valid) {
        continue;
      }
    }

    // (3) LONG OPTIONS
    if (stillAcceptingOpts && LONG_OPT_REGEX.test(token)) {
      parseLongOpt(parsedOptSchemaMap, errors, opts, unknownOpts, token);
      continue;
    }

    // (4) COMMANDS
    if (expectsCmd) {
      const parsedCmdSchema = parsedCmdSchemaMap.get(token);
      if (!parsedCmdSchema) {
        const cmds = Array.from(parsedCmdSchemaMap.keys());
        errors.push(new UnknownCmdError(token, cmds));
        unknownCmdReceived = true;
        break;
      }

      cmds.push(token);
      expectsCmd = parsedCmdSchema.expectsCmd;
      parsedOptSchemaMap = new Map([
        ...parsedOptSchemaMap,
        ...parsedCmdSchema.opts,
      ]);
      parsedCmdSchemaMap = parsedCmdSchema.cmds;
      minArgs = parsedCmdSchema.minArgs;
      maxArgs = parsedCmdSchema.maxArgs;
      argFilter = parsedCmdSchema.argFilter;

      continue;
    }

    // (5) ARGUMENTS
    if (args.length >= maxArgs) {
      // Too many arguments, no need to run the extra arguments through the
      // argument filter.
      args.push(token);
    } else {
      let validArg = true;
      let filteredArg;
      try {
        filteredArg = argFilter(token, argPos);
      } catch (err) {
        validArg = false;
        errors.push(new ArgFilterError(token, argFilter, err));
      }
      if (validArg) {
        args.push(filteredArg);
      }
    }
    argPos++;
  }

  // Add "excess arguments error" if applicable.
  if (args.length > maxArgs) {
    // Note: This has to be done before the array is spliced.
    const numArgsReceived = args.length;
    // Note: The use of `splice` is intentional as we want to remove the
    // extra arguments from `args`.
    const excessArgs = args.splice(maxArgs, Infinity) as string[];
    errors.push(new ExcessArgsError(excessArgs, numArgsReceived, maxArgs));
  }

  // Add "insufficient arguments error" or "command expected error" if
  // applicable.
  if (!unknownCmdReceived && argPos < minArgs) {
    if (expectsCmd) {
      const cmds = Array.from(parsedCmdSchemaMap.keys());
      errors.push(new CmdExpectedError(cmds));
    } else {
      errors.push(new InsufficientArgsError(args.length, minArgs));
    }
  }

  const parsedInput = { cmds, opts, args, errors };

  if (cfg.hooks) {
    const helpOpt = cfg.hooks.helpOpt
      ? ([] as string[]).concat(
          cfg.hooks.helpOpt?.name || DEFAULT_HELP_OPT_HOOK_OPT_NAME,
        )
      : [];
    const versionOpt = cfg.hooks.versionOpt
      ? ([] as string[]).concat(
          cfg.hooks.versionOpt?.name || DEFAULT_VERSION_OPT_HOOK_OPT_NAME,
        )
      : [];
    const runHook = (
      hook: HelpOptHook | VersionOptHook | ParserErrorsHook,
      defaultExitCode: number,
    ) => {
      const { exitCode, callback } = hook;
      callback(parsedInput);
      if (exitCode !== false) {
        process.exit(exitCode ?? defaultExitCode);
      }
    };

    if (cfg.hooks.helpOpt && opts.has(helpOpt)) {
      runHook(cfg.hooks.helpOpt, DEFAULT_HELP_OPT_HOOK_EXIT_CODE);
    } else if (cfg.hooks.versionOpt && opts.has(versionOpt)) {
      runHook(cfg.hooks.versionOpt, DEFAULT_VERSION_OPT_HOOK_EXIT_CODE);
    } else if (cfg.hooks.parserErrors && errors.length) {
      runHook(cfg.hooks.parserErrors, DEFAULT_PARSER_ERROR_HOOK_EXIT_CODE);
    }
  }

  return parsedInput;
};
