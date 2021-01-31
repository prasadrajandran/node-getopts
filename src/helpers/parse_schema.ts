import { Schema } from '../interfaces/schema';
import { Config, OptConfigMap } from '../interfaces/config';
import { parseCmdSchema } from './parse_cmd_schema';
import { parseOptSchema } from './parse_opt_schema';

/**
 * Parse a schema.
 * @param schema Schema to parse.
 * @param alreadyDefinedOpts A map of options that have already been defined in
 *     this sequence. This prevents duplicate options from being defined for any
 *     combination of commands (however deeply nested). This is used internally
 *     by the function.
 */
export const parseSchema = (
  schema: Schema,
  alreadyDefinedOpts: OptConfigMap = new Map(),
): Config => {
  const expectsCmd = Boolean(schema.cmds);
  const minArgs = schema.minArgs ?? (expectsCmd ? 1 : 0);
  const maxArgs = schema.maxArgs ?? (expectsCmd ? 1 : Infinity);

  if (expectsCmd) {
    if (Number.isFinite(minArgs) && minArgs !== 1) {
      throw new Error(
        `[SCHEMA] If a command is expected, the only valid value for ` +
          `"minArgs" is 1. It should ideally be left undefined as it would ` +
          `automatically be set to 1 in this case: ${minArgs}`,
      );
    } else if (Number.isFinite(maxArgs) && maxArgs !== 1) {
      throw new Error(
        `[SCHEMA] If a command is expected, the only valid value for ` +
          `"maxArgs" is 1. It should ideally be left undefined as it would ` +
          `automatically be set to 1 in this case: ${maxArgs}`,
      );
    }
  }

  if (minArgs < 0) {
    throw new Error(`[SCHEMA] "minArgs" cannot be less than 1: ${minArgs}`);
  } else if (!Number.isInteger(minArgs)) {
    throw new Error(
      `[SCHEMA] "minArgs" is expected to be a whole number: ${minArgs}`,
    );
  }

  if (minArgs > maxArgs) {
    throw new Error(
      `[SCHEMA] "minArgs" cannot be more than "maxArgs": ` +
        `${minArgs}, ${maxArgs}`,
    );
  } else if (!Number.isInteger(maxArgs) && maxArgs !== Infinity) {
    throw new Error(
      `"maxArgs" is expected to be a whole number or Infinity: ${maxArgs}`,
    );
  }

  const opts = parseOptSchema(schema.opts || []);
  for (const optName of opts.keys()) {
    if (alreadyDefinedOpts.has(optName)) {
      throw new Error(
        `[SCHEMA] Duplicate option found in this sequence: "${optName}"`,
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
