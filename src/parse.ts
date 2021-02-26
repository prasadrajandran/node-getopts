import { OptMap } from './interfaces/opt_map';
import { Schema } from './interfaces/schema';
import { ParsedArgs } from './interfaces/parsed_args';
import { Settings } from './interfaces/settings';
import { parseSchema } from './parse_schema';
import { parseOpt } from './parse_opt';
import { parseLongOpt } from './parse_long_opt';
import {
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
 * @param settings - CLI settings.
 */
export const parse = (schema: Schema, settings?: Settings): ParsedArgs => {
  const { argv: inputArgs } = Object.assign(
    {
      argv: process.argv.slice(ARGS_INDEX),
    },
    settings || {},
  );
  const config = parseSchema(schema);

  const errors: Error[] = [];
  const cmds: string[] = [];
  const opts: OptMap = new Map();
  const args: unknown[] = [];

  let optConfigMap = config.opts;
  let cmdConfigMap = config.cmds;
  let minArgs = config.minArgs;
  let maxArgs = config.maxArgs;
  let argFilter = config.argFilter;
  let expectsCmd = config.expectsCmd;
  let unknownCmdReceived = false;
  let stillAcceptingOpts = true;
  let argPos = 0;
  for (let i = 0; i < inputArgs.length; i++) {
    const inputArg = inputArgs[i];

    // (1) STOP PROCESSING ARGUMENT FLAG
    if (stillAcceptingOpts && inputArg === STOP_PROCESSING_OPTS_FLAG) {
      stillAcceptingOpts = false;
      continue;
    }

    // (2) OPTIONS
    if (stillAcceptingOpts && OPT_REGEX.test(inputArg)) {
      const { nextArgConsumed } = parseOpt(
        optConfigMap,
        errors,
        opts,
        inputArg,
        inputArgs[i + 1],
      );
      if (nextArgConsumed) {
        i++;
      }
      continue;
    }

    // (3) LONG OPTIONS
    if (stillAcceptingOpts && LONG_OPT_REGEX.test(inputArg)) {
      parseLongOpt(optConfigMap, errors, opts, inputArg);
      continue;
    }

    // (4) COMMANDS
    if (expectsCmd) {
      const cmdConfig = cmdConfigMap.get(inputArg);
      if (!cmdConfig) {
        const cmds = Array.from(cmdConfigMap.keys());
        errors.push(
          new UnknownCmdError(
            `Got "${inputArg}" but expected ${cmds
              .map((cmd) => `"${cmd}"`)
              .join(', ')}`,
            inputArg,
            cmds,
          ),
        );
        unknownCmdReceived = true;
        break;
      }

      cmds.push(inputArg);
      expectsCmd = cmdConfig.expectsCmd;
      optConfigMap = new Map([...optConfigMap, ...cmdConfig.opts]);
      cmdConfigMap = cmdConfig.cmds;
      minArgs = cmdConfig.minArgs;
      maxArgs = cmdConfig.maxArgs;
      argFilter = cmdConfig.argFilter;

      continue;
    }

    // (5) ARGUMENTS
    if (args.length >= maxArgs) {
      // Too many arguments, no need to run the extra arguments through the
      // argument filter.
      args.push(inputArg);
    } else {
      try {
        args.push(argFilter(inputArg, argPos));
      } catch (err) {
        errors.push(
          new ArgFilterError(
            `Exception thrown when processing "${inputArg}" at position ` +
              argPos,
            inputArg,
            argPos,
            argFilter,
            err,
          ),
        );
      }
    }
    argPos++;
  }

  // Add "excess arguments error" if applicable.
  if (args.length > maxArgs) {
    // Note: The use of `splice` is intentional as we want to remove the
    // extra arguments from `args`.
    const excessArgs = args.splice(maxArgs, Infinity) as string[];
    errors.push(
      new ExcessArgsError(
        `Only ${maxArgs} argument${maxArgs > 1 ? 's' : ''} expected but got ` +
          `${excessArgs.length > 1 ? 'these' : 'this'} ` +
          `${excessArgs.map((arg) => `"${arg}"`).join(', ')} additional ` +
          `argument${excessArgs.length > 1 ? 's' : ''}`,
        excessArgs,
        args.length + excessArgs.length,
        maxArgs,
      ),
    );
  }

  // Add "insufficient arguments error" or "command expected error" if
  // applicable.
  if (!unknownCmdReceived && argPos < minArgs) {
    if (expectsCmd) {
      const cmds = Array.from(cmdConfigMap.keys());
      errors.push(
        new CmdExpectedError(
          `${cmds.map((cmd) => `"${cmd}"`).join(', ')} expected`,
          cmds,
        ),
      );
    } else {
      errors.push(
        new InsufficientArgsError(
          `At least ${minArgs} argument${minArgs > 1 ? 's' : ''} expected`,
          args.length,
          minArgs,
        ),
      );
    }
  }

  return {
    cmds,
    opts,
    args,
    errors,
  };
};
