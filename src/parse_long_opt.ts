import { ParsedOptSchemaMap } from './interfaces/parsed_schema';
import { OptMap } from './classes/opt_map';
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
 * @param token - Token to parse.
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
  token: string,
): void => {
  const [, optName, optArg] = token.match(/^(--[^=]+)=?(.*)/) || [];

  const parsedOptSchema = parsedOptSchemaMap.get(optName);
  if (parsedOptSchema) {
    const {
      argAccepted,
      argRequired,
      supportsMultipleArgs,
      optArgFilter,
      parsedDuplicates,
    } = parsedOptSchema;

    // Note: Processing is not halted even though an error has been generated
    // because this gives users the option to ignore this error.
    if (
      !supportsMultipleArgs &&
      opts.has(optName) &&
      !parsedDuplicates.has(optName)
    ) {
      parsedDuplicates.add(optName);
      errors.push(new DuplicateOptError(optName));
    }

    if (!parsedOptSchema.parsedName) {
      parsedOptSchema.parsedName = optName;
    }
    const existingArgs = (opts.get(optName) as unknown[]) || [];
    if (supportsMultipleArgs) {
      opts.set(optName, []);
    } else {
      opts.set(optName, undefined);
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

    if (argAccepted && optArg) {
      let validArg = true;
      let filteredArg;
      try {
        filteredArg = optArgFilter(optArg);
      } catch (err) {
        validArg = false;
        errors.push(new OptArgFilterError(optName, optArg, optArgFilter, err));
      }
      if (validArg) {
        if (supportsMultipleArgs) {
          opts.set(optName, existingArgs.concat(filteredArg));
        } else {
          opts.set(optName, filteredArg);
        }
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
