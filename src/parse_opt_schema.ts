import { OptSchema } from './interfaces/schema';
import { OptConfigMap, OptConfig } from './interfaces/config';

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
    const config: OptConfig = {
      argAccepted: arg === 'required' || arg === 'optional',
      argRequired: arg === 'required',
      argFilter: argFilter || ((arg: string) => arg),
    };

    if (!name && !longName) {
      throw new Error(
        `[SCHEMA] Option must have a name or a long name defined`,
      );
    }

    if (config.argAccepted && !config.argRequired && !longName) {
      throw new Error(
        `[SCHEMA] Since arguments are optional for ${name}, a long option ` +
          `must also be defined because only long options are able to accept ` +
          `optional arguments`,
      );
    }

    if (name) {
      if (!OPT_SCHEMA_REGEX.test(name)) {
        throw new Error(`[SCHEMA] Invalid option name: "${name}"`);
      } else if (opts.has(name)) {
        throw new Error(`[SCHEMA] Duplicate option name: "${name}"`);
      }
      opts.set(name, config);
    }

    if (longName) {
      if (!LONG_OPT_SCHEMA_REGEX.test(longName)) {
        throw new Error(`[SCHEMA] Invalid long option name: "${longName}"`);
      } else if (opts.has(longName)) {
        throw new Error(`[SCHEMA] Duplicate long option name: "${longName}"`);
      }
      opts.set(longName, config);
    }
  }

  return opts;
};
