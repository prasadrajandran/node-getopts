import { OptMap } from './interfaces/opt_map';
import { OptConfigMap } from './interfaces/config';
import {
  ParseError,
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
  errors: ParseError[],
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
      const duplicateOptError = errors.find((err) => {
        return (
          err instanceof DuplicateOptError &&
          err.details.get('duplicateOpt') === optName
        );
      });
      if (!duplicateOptError) {
        errors.push(new DuplicateOptError(optName));
      }
    }

    opts.set(optName, undefined);

    if (argAccepted && optArg) {
      try {
        opts.set(optName, argFilter(optArg));
      } catch (err) {
        errors.push(new OptArgFilterError(optName, optArg, argFilter, err));
      }
    } else if (!argAccepted && optArg) {
      errors.push(new UnexpectedOptArgError(optName, optArg));
    } else if (argRequired && !optArg) {
      errors.push(new OptMissingArgError(optName));
    }
  } else {
    errors.push(new UnknownOptError(optName));
  }
};
