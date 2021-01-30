import { OptMap } from '../interfaces/opt_map';
import { ParsingError } from '../interfaces/parsing_error';
import { OptConfigMap } from '../interfaces/config';

/**
 * Parse an option.
 * @param optSchema Option's schema.
 * @param errors Errors are appended to this.
 * @param opts Options are added to this.
 * @param input Input to parse. E.g. "-a", "-abc", "-a500", etc.
 * @param nextInput Next input (used if the option requires arguments and the
 *     argument is separated by a space).
 * @return {{ nextArgConsumed: boolean }} `nextArgConsumed` = true if the
 *     option requires arguments and the argument is located in the next input.
 * 
 * Note: the following parameters are modified directly (i.e. sideffect):
 * - errors
 * - opts
 */
export const parseOpt = (
  optSchema: OptConfigMap,
  errors: ParsingError[],
  opts: OptMap,
  input: string,
  nextInput?: string,
) => {
  let nextArgConsumed = false;

  for (let i = 1; i < input.length; i++) {
    const optName = `-${input[i]}`;
    const optConfig = optSchema.get(optName);

    if (optConfig) {
      const optArgs = opts.get(optName) || [];
      opts.set(optName, optArgs);

      const { argRequired, argFilter } = optConfig;

      const optArg = input.slice(i + 1) || (nextInput as string);
      if (argRequired && optArg) {
        nextArgConsumed = !input[i + 1] && Boolean(nextInput);

        try {
          optArgs.push(argFilter(optArg));
        } catch (err) {
          errors.push({
            type: 'OPT_ARG_FILTER_FAILED',
            msg: `${optName}'s filter failed to process: "${optArg}"`,
            err,
          });
        }
        break;
      } else if (argRequired) {
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
  }

  return {
    opts,
    errors,
    nextArgConsumed,
  };
};
