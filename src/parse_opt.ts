import { OptMap } from './interfaces/opt_map';
import { OptConfigMap } from './interfaces/config';
import {
  DuplicateOptError,
  OptArgFilterError,
  OptMissingArgError,
  UnknownOptError,
} from './classes/errors';

/**
 * Parse an option.
 * @param optSchema - Option's schema.
 * @param errors - Errors are appended to this.
 * @param opts - Options are added to this.
 * @param input - Input to parse. E.g. "-a", "-abc", "-a500", etc.
 * @param nextInput - Next input (used if the option requires arguments and the
 *     argument is separated by a space).
 * @returns If the option requires an argument and the argument is separated by
 *     a space, then we would have to consume the next input in order to acquire
 *     the value of the argument and if that happens, `nextArgConsumed` will be
 *     set to true.
 *
 * Note: the following parameters are modified directly (i.e. sideffect):
 * - errors
 * - opts
 */
export const parseOpt = (
  optSchema: OptConfigMap,
  errors: Error[],
  opts: OptMap,
  input: string,
  nextInput?: string,
): { nextArgConsumed: boolean } => {
  let nextArgConsumed = false;

  for (let i = 1; i < input.length; i++) {
    const optName = `-${input[i]}`;
    const optConfig = optSchema.get(optName);

    if (optConfig) {
      const { argRequired, argFilter } = optConfig;

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
            new DuplicateOptError(
              `"${optName}" was entered 2 times`,
              optName,
              2,
            ),
          );
        }
      }

      opts.set(optName, undefined);

      // Note: We do not check if the next input might be an option or even the
      // `STOP_PROCESSING_OPTS_FLAG` flag because if the option requires an
      // argument, the next item will be treated as the argument no matter what.
      const optArg = input.slice(i + 1) || (nextInput as string);

      if (argRequired && optArg) {
        nextArgConsumed = !input[i + 1] && Boolean(nextInput);

        try {
          opts.set(optName, argFilter(optArg));
        } catch (argFilterError) {
          errors.push(
            new OptArgFilterError(
              `${optName}'s argument filter threw an exception when ` +
                `processing "${optArg}"`,
              optName,
              optArg,
              argFilter,
              argFilterError,
            ),
          );
        }
        break;
      } else if (argRequired) {
        errors.push(
          new OptMissingArgError(`${optName} requires an argument`, optName),
        );
      }
    } else {
      errors.push(new UnknownOptError(`"${optName}"`, optName));
    }
  }

  return { nextArgConsumed };
};
