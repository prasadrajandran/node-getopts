import { Schema } from './interfaces/schema';
import { Config, OptConfigMap } from './interfaces/config';
import { parseCmdSchema } from './parse_cmd_schema';
import { parseOptSchema } from './parse_opt_schema';
import { SchemaError } from './classes/errors';

/**
 * Parse a schema.
 * @param schema - Schema to parse.
 * @param alreadyDefinedOpts - A map of options that have already been defined
 *     in this sequence. This prevents duplicate options from being defined for
 *     any combination of commands (however deeply nested). This is used
 *     internally by the function.
 */
export const parseSchema = (
  schema: Schema,
  alreadyDefinedOpts: OptConfigMap = new Map(),
): Config => {
  const expectsCmd = Boolean(schema.cmds?.length);
  const minArgs = schema.minArgs ?? (expectsCmd ? 1 : 0);
  const maxArgs = schema.maxArgs ?? (expectsCmd ? 1 : Infinity);

  if (expectsCmd) {
    if (Number.isFinite(minArgs) && minArgs !== 0 && minArgs !== 1) {
      throw new SchemaError(
        `If a command is expected (instead of args), the only valid values ` +
          `for "minArgs" is 0 (command is optional) or 1 (command is required` +
          `) If left undefined, it will be set to 1 by default. Got ` +
          `"${minArgs}"`,
      );
    } else if (Number.isFinite(maxArgs) && maxArgs !== 1) {
      throw new SchemaError(
        `If a command is expected (instead of args), the only valid value for` +
          ` "maxArgs" is 1. It should ideally be left undefined as it would ` +
          `automatically be set to 1. Got "${maxArgs}"`,
      );
    }
  }

  if (minArgs < 0) {
    throw new SchemaError(`"minArgs" cannot be less than 1. Got "${minArgs}"`);
  } else if (!Number.isInteger(minArgs)) {
    throw new SchemaError(
      `"minArgs" is expected to be a whole number. Got "${minArgs}"`,
    );
  }

  if (minArgs > maxArgs) {
    throw new SchemaError(
      `"minArgs" cannot be more than "maxArgs": ${minArgs}, ${maxArgs}`,
    );
  } else if (!Number.isInteger(maxArgs) && maxArgs !== Infinity) {
    throw new SchemaError(
      `"maxArgs" is expected to be a whole number or Infinity. Got ` +
        `"${maxArgs}"`,
    );
  }

  const opts = parseOptSchema(schema.opts || []);
  for (const optName of opts.keys()) {
    if (alreadyDefinedOpts.has(optName)) {
      throw new SchemaError(
        `Duplicate option, "${optName}", found in this command sequence`,
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
    argFilter: schema.argFilter || ((arg: string) => arg),
    expectsCmd,
  };
};
