import { OptSchema } from './interfaces/schema';
import { OptConfigMap, OptConfig } from './interfaces/config';
import { SchemaError } from './classes/errors';

/**
 * A option can only be made out of alphanumeric characters.
 *
 * E.g.:
 * - '-a'
 * - '-B'
 */
export const OPT_SCHEMA_REGEX = /^-[a-zA-Z\d]$/;

/**
 * A long option can only be made out of alphanumeric characters and the words
 * can be separated by a single dash.
 *
 * E.g.:
 * - '--help'
 * - '--show-hidden-files'
 */
export const LONG_OPT_SCHEMA_REGEX = /^--[a-zA-Z\d]+(-([a-zA-Z\d])+)*$/;

/**
 * Parse an option's schema.
 * @param optSchemas - OptSchemas
 */
export const parseOptSchema = (optSchemas: OptSchema[]): OptConfigMap => {
  const opts: OptConfigMap = new Map();

  for (const { name, longName, arg, argFilter } of optSchemas) {
    // Note: The fact that the "OptConfig" object is shared (i.e. it's the same
    // object reference) between option and long option is intentional. If a
    // property is updated in the OptConfig, we want that to affect all options
    // that share that object.
    const config: OptConfig = {
      argAccepted: arg === 'required' || arg === 'optional',
      argRequired: arg === 'required',
      argFilter: argFilter || ((arg: string) => arg),
      duplicatedParsedNames: new Set(),
      parsed: false,
    };

    if (!name && !longName) {
      throw new SchemaError(`Option must have a name or a long name defined`);
    }

    if (!config.argAccepted && argFilter) {
      throw new SchemaError(
        `argFilter provided but "${name || longName}" does not accept an ` +
          `argument. Do not forget to set the "arg" property too.`,
      );
    }

    if (config.argAccepted && !config.argRequired && !longName) {
      throw new SchemaError(
        `Since arguments are optional for "${name}", a long option must also ` +
          `be defined because only long options are able to accept optional ` +
          `arguments`,
      );
    }

    if (name) {
      if (!OPT_SCHEMA_REGEX.test(name)) {
        throw new SchemaError(`"${name}" is an invalid name for an option`);
      } else if (opts.has(name)) {
        throw new SchemaError(`"${name}" is a duplicate option`);
      }
      opts.set(name, config);
    }

    if (longName) {
      if (!LONG_OPT_SCHEMA_REGEX.test(longName)) {
        throw new SchemaError(
          `"${longName}" is an invalid name for a long option`,
        );
      } else if (opts.has(longName)) {
        throw new SchemaError(`"${longName}" is a duplicate long option`);
      }
      opts.set(longName, config);
    }
  }

  return opts;
};
