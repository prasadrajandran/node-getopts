import { CmdSchema } from './interfaces/schema';
import {
  ParsedOptSchemaMap,
  ParsedCmdSchemaMap,
} from './interfaces/parsed_schema';
import { parseSchema } from './parse_schema';
import { SchemaError } from './classes/errors';

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
    if (cmds.has(name)) {
      throw new SchemaError(`"${name}" is a duplicate command`);
    }
    cmds.set(name, parseSchema(schema, alreadyDefinedOpts));
  }

  return cmds;
};
