import { OptMap } from './interfaces/parsed_input';
import { ParsedOptSchemaMap } from './interfaces/parsed_schema';
import {
  ParserError,
  DuplicateOptError,
  OptArgFilterError,
  OptMissingArgError,
  UnexpectedOptArgError,
  UnknownOptError,
  DuplicateAliasOptError,
} from './classes/errors';

/**
 * Parses a long option.
 * @internal
 * @param parsedOptSchemaMap - Option's parsed schema map.
 * @param errors - Any parsing errors will be appended to this.
 * @param opts - Parsed options will be added to this.
 * @param unknownOpts - Set to ensure that only unique instances of
 *     "UnknownOptError" are generated.
 * @param input - Input to parse.
 *
 * Note: the following parameters are modified directly (i.e. sideffect):
 * - errors
 * - opts
 */
export const parseLongOpt = (
  parsedOptSchemaMap: ParsedOptSchemaMap,
  errors: ParserError[],
  opts: OptMap,
  unknownOpts: Set<string>,
  input: string,
): void => {
  const [, optName, optArg] = input.match(/^(--[^=]+)=?(.*)/) || [];

  const parsedOptSchema = parsedOptSchemaMap.get(optName);
  if (parsedOptSchema) {
    const { argAccepted, argRequired, argFilter, parsedDuplicates } =
      parsedOptSchema;

    // Note: Processing is not halted even though an error has been generated
    // because this gives users the option to ignore this error.
    if (opts.has(optName) && !parsedDuplicates.has(optName)) {
      parsedDuplicates.add(optName);
      errors.push(new DuplicateOptError(optName));
    }

    if (!parsedOptSchema.parsedName) {
      parsedOptSchema.parsedName = optName;
    }
    opts.set(optName, undefined);

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
  } else if (!unknownOpts.has(optName)) {
    unknownOpts.add(optName);
    errors.push(new UnknownOptError(optName));
  }
};
