import { OPT_SCHEMA_REGEX } from './parse_opt_schema';
import { OptMap } from './interfaces/parsed_input';
import { ParsedOptSchemaMap } from './interfaces/parsed_schema';
import {
  ParserError,
  DuplicateOptError,
  OptArgFilterError,
  OptMissingArgError,
  UnknownOptError,
  DuplicateAliasOptError,
} from './classes/errors';

/**
 * Parse an option.
 * @internal
 * @param parsedOptSchemaMap - Option's parsed schema map.
 * @param errors - Errors are appended to this.
 * @param opts - Options are added to this.
 * @param unknownOpts - Set to ensure that only unique instances of
 *     "UnknownOptError" are generated.
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
  parsedOptSchemaMap: ParsedOptSchemaMap,
  errors: ParserError[],
  opts: OptMap,
  unknownOpts: Set<string>,
  input: string,
  nextInput?: string,
): { valid: boolean; nextArgConsumed: boolean } => {
  const parsedOpts: OptMap = new Map([...opts]);
  let valid = true;
  let nextArgConsumed = false;

  for (let i = 1; i < input.length; i++) {
    const optName = `-${input[i]}`;
    const parsedOptSchema = parsedOptSchemaMap.get(optName);

    if (parsedOptSchema) {
      const { argRequired, argFilter, parsedDuplicates } = parsedOptSchema;

      // Note: Processing is not halted even though an error has been generated
      // because this gives users the option to ignore this error.
      if (parsedOpts.has(optName) && !parsedDuplicates.has(optName)) {
        parsedDuplicates.add(optName);
        errors.push(new DuplicateOptError(optName));
      }

      if (!parsedOptSchema.parsedName) {
        parsedOptSchema.parsedName = optName;
      }
      parsedOpts.set(optName, undefined);

      // Note: Processing is not halted even though an error has been generated
      // because this gives users the option to ignore this error.
      if (
        parsedOptSchema.parsedName !== optName &&
        !parsedDuplicates.has(optName)
      ) {
        errors.push(
          new DuplicateAliasOptError(parsedOptSchema.parsedName, optName),
        );
      }

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
    } else if (!unknownOpts.has(optName)) {
      unknownOpts.add(optName);
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
