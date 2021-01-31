import { CmdSchema } from './interfaces/schema';
import { OptConfigMap, CmdConfigMap } from './interfaces/config';
import { parseSchema } from './parse_schema';

/**
 * Parse a command schema.
 * @param cmdSchemas Command schemas to parse.
 * @param alreadyDefinedOpts A map of options that have already been defined in
 *     this sequence. This prevents duplicate options from being defined for any
 *     combination of commands (however deeply nested).
 */
export const parseCmdSchema = (
  cmdSchemas: CmdSchema[],
  alreadyDefinedOpts: OptConfigMap,
): CmdConfigMap => {
  const cmds: CmdConfigMap = new Map();

  for (const { name, ...schema } of cmdSchemas) {
    if (cmds.has(name)) {
      throw new Error(`[SCHEMA] Duplicate command name: "${name}"`);
    }
    cmds.set(name, parseSchema(schema, alreadyDefinedOpts));
  }

  return cmds;
};
