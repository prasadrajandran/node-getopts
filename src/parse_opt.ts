import { OptMap } from './interfaces/opt_map';
import { OptConfigMap } from './interfaces/config';
import {
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
      const optArgs = opts.get(optName) || [];
      opts.set(optName, optArgs);

      const { argRequired, argFilter } = optConfig;

      // Note: We do not check if the next input might be an option or even the
      // `STOP_PROCESSING_OPTS_FLAG` flag because if the option requires an
      // argument, the next item will be treated as the argument no matter what.
      const optArg = input.slice(i + 1) || (nextInput as string);
      if (argRequired && optArg) {
        nextArgConsumed = !input[i + 1] && Boolean(nextInput);

        try {
          optArgs.push(argFilter(optArg));
        } catch (err) {
          errors.push(
            new OptArgFilterError(
              `${optName}'s argument filter threw an exception when ` +
                `processing "${optArg}"`,
              optName,
              optArg,
              argFilter,
              err,
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
