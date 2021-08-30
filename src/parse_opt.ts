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
 * @param token - Token to parse. E.g. "-a", "-abc", "-a500", etc.
 * @param nextToken - Next token (used if the option requires arguments and the
 *     argument is separated by a space).
 * @returns If the option requires an argument and the argument is separated by
 *     a space, then we would have to consume the next token in order to acquire
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
  token: string,
  nextToken?: string,
): { valid: boolean; nextArgConsumed: boolean } => {
  const parsedOpts: OptMap = new Map([...opts]);
  let valid = true;
  let nextArgConsumed = false;

  for (let i = 1; i < token.length; i++) {
    const optName = `-${token[i]}`;
    const parsedOptSchema = parsedOptSchemaMap.get(optName);

    if (parsedOptSchema) {
      const {
        argRequired,
        supportsMultipleArgs,
        optArgFilter,
        parsedDuplicates,
      } = parsedOptSchema;

      // Note: Processing is not halted even though an error has been generated
      // because this gives users the option to ignore this error.
      if (
        !supportsMultipleArgs &&
        parsedOpts.has(optName) &&
        !parsedDuplicates.has(optName)
      ) {
        parsedDuplicates.add(optName);
        errors.push(new DuplicateOptError(optName));
      }

      if (!parsedOptSchema.parsedName) {
        parsedOptSchema.parsedName = optName;
      }
      const existingArgs = (parsedOpts.get(optName) as unknown[]) || [];
      if (supportsMultipleArgs) {
        parsedOpts.set(optName, []);
      } else {
        parsedOpts.set(optName, undefined);
      }

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

      // Note: We do not check if the next token might be an option or even the
      // `STOP_PROCESSING_OPTS_FLAG` flag because if the option requires an
      // argument, the next item will be treated as the argument no matter what.
      const optArg = token.slice(i + 1) || (nextToken as string);

      if (argRequired && optArg) {
        nextArgConsumed = !token[i + 1] && Boolean(nextToken);
        let validArg = true;
        let filteredArg;
        try {
          filteredArg = optArgFilter(optArg);
        } catch (err) {
          validArg = false;
          errors.push(
            new OptArgFilterError(optName, optArg, optArgFilter, err),
          );
        }
        if (validArg) {
          if (supportsMultipleArgs) {
            parsedOpts.set(optName, existingArgs.concat(filteredArg));
          } else {
            parsedOpts.set(optName, filteredArg);
          }
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
