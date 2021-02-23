import { OptMap } from './interfaces/opt_map';
import { Schema } from './interfaces/schema';
import { parseSchema } from './parse_schema';
import { parseOpt } from './parse_opt';
import { parseLongOpt } from './parse_long_opt';
import { ParsedArgs } from './interfaces/parsed_args';
import {
  ArgFilterError,
  CmdExpectedError,
  TooFewArgsError,
  TooManyArgsError,
  UnknownCmdError,
} from './classes/errors';

/**
 * Absolute pathname of the executable that started the Node.js process. This
 * is the first item in `process.argv`.
 * @see {@link https://nodejs.org/docs/latest/api/process.html#process_process_execpath}
 */
const EXEC_PATH_INDEX = 0;

/**
 * Path to the JavaScript file being executed. This is the second item in
 * `process.argv`.
 */
const MODULE_INDEX = EXEC_PATH_INDEX + 1;

/**
 * The remaining elements in `process.argv`.
 */
const ARGS_INDEX = MODULE_INDEX + 1;

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
 * @param inputArgs - CLI input. If explicitly provided, it must match the
 *     structure of `process.argv` (i.e. index 0 is the exec path, index 1 is
 *     the module, and arguments start from index 2).
 */
export const parse = (
  schema: Schema,
  inputArgs: NodeJS.Process['argv'] = process.argv,
): ParsedArgs => {
  const config = parseSchema(schema);
  const execPath = inputArgs[EXEC_PATH_INDEX];
  const module = inputArgs[MODULE_INDEX];
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
  for (let i = ARGS_INDEX; i < inputArgs.length; i++) {
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

  // Add "too many arguments error" if applicable.
  if (args.length > maxArgs) {
    // Note: The use of `splice` is intentional as we want to remove the
    // extra arguments from `args`.
    const extraArgs = args.splice(maxArgs, Infinity) as string[];
    errors.push(
      new TooManyArgsError(
        `Only ${maxArgs} argument${maxArgs > 1 ? 's' : ''} expected but got ` +
          `${extraArgs.length > 1 ? 'these' : 'this'} ` +
          `${extraArgs.map((arg) => `"${arg}"`).join(', ')} extra ` +
          `argument${extraArgs.length > 1 ? 's' : ''}`,
        extraArgs,
        args.length + extraArgs.length,
        maxArgs,
      ),
    );
  }

  // Add "too few arguments error" or "command expected error" if applicable.
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
        new TooFewArgsError(
          `At least ${minArgs} argument${minArgs > 1 ? 's' : ''} expected`,
          args.length,
          minArgs,
        ),
      );
    }
  }

  return {
    config,
    execPath,
    module,
    input: inputArgs.slice(ARGS_INDEX).join(' '),
    cmds,
    opts,
    args,
    errors,
  };
};
