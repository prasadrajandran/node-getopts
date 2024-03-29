import { Schema } from './interfaces/schema';
import { ParsedSchema, ParsedOptSchemaMap } from './interfaces/parsed_schema';
import { parseCmdSchema } from './parse_cmd_schema';
import { parseOptSchema } from './parse_opt_schema';
import { SchemaError } from './classes/schema_error';

/**
 * Parse a schema.
 * @internal
 * @param schema - Schema to parse.
 * @param alreadyDefinedOpts - A map of options that have already been defined
 *     in this sequence. This prevents duplicate options from being defined for
 *     any combination of commands (however deeply nested). This is used
 *     internally by the function.
 */
export const parseSchema = (
  schema: Schema,
  alreadyDefinedOpts: ParsedOptSchemaMap = new Map(),
): ParsedSchema => {
  const expectsCmd = Boolean(schema.cmds?.length);
  const minArgs = schema.args?.min ?? (expectsCmd ? 1 : 0);
  const maxArgs = schema.args?.max ?? (expectsCmd ? 1 : Infinity);
  const opts = parseOptSchema(schema.opts || []);

  if (expectsCmd) {
    if (Number.isFinite(minArgs) && minArgs !== 0 && minArgs !== 1) {
      throw new SchemaError(
        process.env.NODE_ENV !== 'production'
          ? `If a command is expected (instead of arguments), the only valid ` +
            `values for "args.min" is 0 (command is optional) or 1 (command ` +
            `is required) If left undefined, it will be set to 1 by ` +
            `default. Received "${minArgs}"`
          : '',
      );
    } else if (Number.isFinite(maxArgs) && maxArgs !== 1) {
      throw new SchemaError(
        process.env.NODE_ENV !== 'production'
          ? `If a command is expected (instead of arguments), the only valid ` +
            `value for "args.max" is 1. It should ideally be left undefined ` +
            `as it would automatically be set to 1. Received "${maxArgs}"`
          : '',
      );
    }

    if (schema.args?.filter) {
      throw new SchemaError(
        process.env.NODE_ENV !== 'production'
          ? `An argument filter has no effect if a command is expected.`
          : '',
      );
    }
  }

  if (minArgs < 0) {
    throw new SchemaError(
      process.env.NODE_ENV !== 'production'
        ? `"args.min" cannot be less than 1. Received "${minArgs}"`
        : '',
    );
  } else if (!Number.isInteger(minArgs)) {
    throw new SchemaError(
      process.env.NODE_ENV !== 'production'
        ? `"args.min" is expected to be a whole number. Received "${minArgs}"`
        : '',
    );
  }

  if (minArgs > maxArgs) {
    throw new SchemaError(
      process.env.NODE_ENV !== 'production'
        ? `"args.min" cannot be more than "args.max". Received "${minArgs}" ` +
          `and "${maxArgs}"`
        : '',
    );
  } else if (!Number.isInteger(maxArgs) && maxArgs !== Infinity) {
    throw new SchemaError(
      process.env.NODE_ENV !== 'production'
        ? `"args.max" is expected to be a whole number or Infinity. Received ` +
          `"${maxArgs}"`
        : '',
    );
  }

  for (const optName of opts.keys()) {
    if (alreadyDefinedOpts.has(optName)) {
      throw new SchemaError(
        process.env.NODE_ENV !== 'production'
          ? `Duplicate option, "${optName}", found in this command sequence`
          : '',
      );
    }
  }

  if (schema.args?.filter) {
    if (maxArgs === 0) {
      throw new SchemaError(
        process.env.NODE_ENV !== 'production'
          ? 'An argument filter has no effect if arguments are not expected'
          : '',
      );
    } else if (typeof schema.args.filter !== 'function') {
      throw new SchemaError(
        process.env.NODE_ENV !== 'production'
          ? 'An argument filter must be a function'
          : '',
      );
    }
  }

  return {
    opts,
    cmds: parseCmdSchema(
      schema.cmds || [],
      new Map([...alreadyDefinedOpts, ...opts]),
    ),
    minArgs,
    maxArgs,
    argFilter: schema.args?.filter || ((arg: string) => arg),
    expectsCmd,
  };
};
