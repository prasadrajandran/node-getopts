import { OPT_SCHEMA_REGEX } from './parse_opt_schema';
import { OptMap } from './interfaces/opt_map';
import { OptConfigMap } from './interfaces/config';
import {
  ParseError,
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
 * @param duplicateOpts - Set to ensure that only unique instances of
 *     "DuplicateOptError" and "UnknownOptError" are generated.
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
  errors: ParseError[],
  opts: OptMap,
  duplicateOpts: Set<string>,
  input: string,
  nextInput?: string,
): { valid: boolean; nextArgConsumed: boolean } => {
  const parsedOpts: OptMap = new Map([...opts]);
  let valid = true;
  let nextArgConsumed = false;

  for (let i = 1; i < input.length; i++) {
    const optName = `-${input[i]}`;
    const optConfig = optSchema.get(optName);

    if (optConfig) {
      const { argRequired, argFilter } = optConfig;

      // Note: Processing is not halted even though an error has been generated
      // because this gives users the option to ignore this error.
      if (parsedOpts.has(optName) && !duplicateOpts.has(optName)) {
        duplicateOpts.add(optName);
        errors.push(new DuplicateOptError(optName));
      }

      parsedOpts.set(optName, undefined);

      // Note: We do not check if the next input might be an option or even the
      // `STOP_PROCESSING_OPTS_FLAG` flag because if the option requires an
      // argument, the next item will be treated as the argument no matter what.
      const optArg = input.slice(i + 1) || (nextInput as string);

      if (argRequired && optArg) {
        nextArgConsumed = !input[i + 1] && Boolean(nextInput);

        try {
          parsedOpts.set(optName, argFilter(optArg));
        } catch (err) {
          errors.push(new OptArgFilterError(optName, optArg, argFilter, err));
        }
        break;
      } else if (argRequired) {
        errors.push(new OptMissingArgError(optName));
      }
    } else if (!OPT_SCHEMA_REGEX.test(optName)) {
      valid = false;
      break;
    } else if (!duplicateOpts.has(optName)) {
      duplicateOpts.add(optName);
      errors.push(new UnknownOptError(optName));
    }
  }

  if (valid) {
    parsedOpts.forEach((optArg, optName) => {
      opts.set(optName, optArg);
    });
  }

  return { valid, nextArgConsumed };
};
