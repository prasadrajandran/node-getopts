import { OptMap } from './interfaces/opt_map';
import { ParsingError } from './interfaces/parsing_error';
import { OptConfigMap } from './interfaces/config';

/**
 * Parses a long option.
 * @param optSchema - Option's schema.
 * @param errors - Any parsing errors will be appended to this.
 * @param opts - Parsed options will be added to this.
 * @param input - Input to parse.
 *
 * Note: the following parameters are modified directly (i.e. sideffect):
 * - errors
 * - opts
 */
export const parseLongOpt = (
  optSchema: OptConfigMap,
  errors: ParsingError[],
  opts: OptMap,
  input: string,
): void => {
  const [, optName, optArg] = input.match(/^(--[^=]+)=?(.*)/) || [];

  const optConfig = optSchema.get(optName);
  if (optConfig) {
    const { argAccepted, argRequired, argFilter } = optConfig;
    const optArgs = opts.get(optName) || [];
    opts.set(optName, optArgs);

    if (argAccepted && optArg) {
      try {
        optArgs.push(argFilter(optArg));
      } catch (err) {
        errors.push({
          type: 'OPT_ARG_FILTER_FAILED',
          msg: `${optName}'s filter failed to process: "${optArg}"`,
          err,
        });
      }
    } else if (argRequired && !optArg) {
      errors.push({
        type: 'OPT_REQUIRES_ARG',
        msg: `${optName} requires an argument`,
      });
    }
  } else {
    errors.push({
      type: 'UNKNOWN_OPT',
      msg: `Unknown option: "${optName}"`,
    });
  }
};
