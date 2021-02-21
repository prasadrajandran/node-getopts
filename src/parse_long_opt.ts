import { OptMap } from './interfaces/opt_map';
import { OptConfigMap } from './interfaces/config';
import {
  OptArgFilterError,
  OptMissingArgError,
  UnknownOptError,
} from './classes/errors';

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
  errors: Error[],
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
        errors.push(
          new OptArgFilterError(
            `${optName}'s argument filter threw an exception when processing ` +
              `"${optArg}"`,
            optName,
            optArg,
            argFilter,
            err,
          ),
        );
      }
    } else if (argRequired && !optArg) {
      errors.push(
        new OptMissingArgError(`${optName} requires an argument`, optName),
      );
    }
  } else {
    errors.push(new UnknownOptError(`"${optName}"`, optName));
  }
};
