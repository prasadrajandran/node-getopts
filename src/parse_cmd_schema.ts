import { CmdSchema } from './interfaces/schema';
import {
  ParsedOptSchemaMap,
  ParsedCmdSchemaMap,
} from './interfaces/parsed_schema';
import { parseSchema } from './parse_schema';
import { SchemaError } from './classes/errors';

const CMD_SCHEMA_REGEX = /^[a-zA-Z\d][a-zA-Z\d-]*$/;

/**
 * Parse a command schema.
 * @internal
 * @param cmdSchemas - Command schemas to parse.
 * @param alreadyDefinedOpts - A map of options that have already been defined
 *     in this sequence. This prevents duplicate options from being defined for
 *     any combination of commands (however deeply nested).
 */
export const parseCmdSchema = (
  cmdSchemas: CmdSchema[],
  alreadyDefinedOpts: ParsedOptSchemaMap,
): ParsedCmdSchemaMap => {
  const cmds: ParsedCmdSchemaMap = new Map();

  for (const { name, ...schema } of cmdSchemas) {
    const parsedSchema = parseSchema(schema, alreadyDefinedOpts);
    for (const n of ([] as string[]).concat(name)) {
      if (!n.length) {
        throw new SchemaError('Command name cannot be empty');
      }
      if (cmds.has(n)) {
        throw new SchemaError(`"${n}" is a duplicate command`);
      }
      if (!CMD_SCHEMA_REGEX.test(n)) {
        throw new SchemaError(
          `"${n}" is not a valid name for a command. ` +
            `Valid characters are "${CMD_SCHEMA_REGEX}"`,
        );
      }
      cmds.set(n, parsedSchema);
    }
  }

  return cmds;
};
