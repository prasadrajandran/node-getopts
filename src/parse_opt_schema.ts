import { OptSchema } from './interfaces/schema';
import {
  ParsedOptSchemaMap,
  ParsedOptSchema,
} from './interfaces/parsed_schema';
import { SchemaError } from './classes/errors';

/**
 * A option can only be made out of alphanumeric characters.
 *
 * E.g.:
 * - '-a'
 * - '-B'
 * @internal
 */
export const OPT_SCHEMA_REGEX = /^-[a-zA-Z\d]$/;

/**
 * A long option can only be made out of alphanumeric characters and the words
 * can be separated by a single dash.
 *
 * E.g.:
 * - '--help'
 * - '--show-hidden-files'
 * @internal
 */
export const LONG_OPT_SCHEMA_REGEX = /^--[a-zA-Z\d]+(-([a-zA-Z\d])+)*$/;

/**
 * Parse an option's schema.
 * @internal
 * @param optSchemas - OptSchemas
 */
export const parseOptSchema = (optSchemas: OptSchema[]): ParsedOptSchemaMap => {
  const opts: ParsedOptSchemaMap = new Map();

  for (const { name, arg } of optSchemas) {
    if (arg && typeof arg.required !== 'boolean') {
      throw new SchemaError(`"opts[].arg.required" must be a boolean`);
    }

    // Note: The fact that the "ParsedOptSchema" object is shared (i.e. it's the
    // same object reference) between option and long option is intentional. If
    // a property is updated in the ParsedOptSchema, we want that to affect all
    // options that share that object.
    const parsedOptSchema: ParsedOptSchema = {
      argAccepted: Boolean(arg),
      argRequired: Boolean(arg?.required),
      supportsMultipleArgs: Boolean(arg?.multiple),
      optArgFilter: arg?.filter || ((arg: string) => arg),
      parsedDuplicates: new Set(),
      parsedName: null,
    };

    let shortName = null;
    let longName = null;

    if (!name.length) {
      throw new SchemaError(`Option must have a name or a long name defined`);
    }

    for (const n of ([] as string[]).concat(name)) {
      if (!n.length) {
        throw new SchemaError(`Option name cannot be empty`);
      }

      const isShortName = OPT_SCHEMA_REGEX.test(n);
      const isLongName = LONG_OPT_SCHEMA_REGEX.test(n);

      if (!shortName && isShortName) {
        shortName = n;
      }

      if (!longName && isLongName) {
        longName = n;
      }

      if (!isShortName && !isLongName) {
        throw new SchemaError(`"${n}" is an invalid name for an option`);
      } else if (opts.has(n)) {
        throw new SchemaError(`"${n}" is a duplicate option`);
      }

      opts.set(n, parsedOptSchema);
    }

    if (arg?.filter && typeof arg.filter !== 'function') {
      throw new SchemaError(
        `${shortName || longName}'s argument filter must be a function`,
      );
    }

    if (
      parsedOptSchema.argAccepted &&
      !parsedOptSchema.argRequired &&
      !longName
    ) {
      throw new SchemaError(
        `Since arguments are optional for "${shortName}", a long option must ` +
          `also be defined because only long options are able to accept ` +
          `optional arguments`,
      );
    }
  }

  return opts;
};
