import { OptMap } from './interfaces/opt_map';
import { OptConfigMap } from './interfaces/config';
import {
  DuplicateOptError,
  OptArgFilterError,
  OptMissingArgError,
  UnexpectedOptArgError,
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

    // Note: Processing is not halted even though an error has been generated
    // because this gives users the option to ignore this error.
    if (opts.has(optName)) {
      const duplicateOptError = errors.find(
        (e) => e instanceof DuplicateOptError && e.duplicateOpt === optName,
      ) as DuplicateOptError;
      if (duplicateOptError) {
        duplicateOptError.count++;
        duplicateOptError.message =
          `"${optName}" was entered ` + `${duplicateOptError.count} times`;
      } else {
        errors.push(
          new DuplicateOptError(`"${optName}" was entered 2 times`, optName, 2),
        );
      }
    }

    opts.set(optName, undefined);

    if (argAccepted && optArg) {
      try {
        opts.set(optName, argFilter(optArg));
      } catch (argFilterError) {
        errors.push(
          new OptArgFilterError(
            `${optName}'s argument filter threw an exception when processing ` +
              `"${optArg}"`,
            optName,
            optArg,
            argFilter,
            argFilterError,
          ),
        );
      }
    } else if (!argAccepted && optArg) {
      errors.push(
        new UnexpectedOptArgError(
          `"${optName}" does not accept an argument but was given "${optArg}"`,
          optArg,
        ),
      );
    } else if (argRequired && !optArg) {
      errors.push(
        new OptMissingArgError(`${optName} requires an argument`, optName),
      );
    }
  } else {
    errors.push(new UnknownOptError(`"${optName}"`, optName));
  }
};
