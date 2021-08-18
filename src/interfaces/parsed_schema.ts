import { OptName, OptLongName } from './parsed_input';
import { ArgFilter, OptArgFilter } from './schema';

/**
 * Parsed CLI option schema.
 * @internal
 */
export interface ParsedOptSchema {
  /**
   * Does the CLI option accept an argument?
   */
  argAccepted: boolean;
  /**
   * Does the CLI option require an argument?
   */
  argRequired: boolean;
  /**
   * Is the user allowed to repeat the option so that multiple arguments can
   * be provided?
   */
  supportsMultipleArgs: boolean;
  /**
   * Processes the CLI option's argument.
   */
  optArgFilter: OptArgFilter;
  /**
   * Keeps track of parsed duplicate options. This is so that the `errors` array
   * will only contain unique instances of "DuplicateOptError".
   */
  parsedDuplicates: Set<OptName | OptLongName>;
  /**
   * Keeps track of the parsed option. This is used to detect when two or more
   * options are aliases of each other (so they shouldn't be used at the same
   * time) (i.e. "DuplicateAliasOptError")
   */
  parsedName: OptName | OptLongName | null;
}

/**
 * Map of a CLI option's name to its parsed schema.
 * @internal
 */
export type ParsedOptSchemaMap = Map<OptName | OptLongName, ParsedOptSchema>;

/**
 * CLI command's name.
 * @internal
 */
export type CmdName = string;

/**
 * Map of a CLI command's name to its parsed schema.
 * @internal
 */
// eslint-disable-next-line no-use-before-define
export type ParsedCmdSchemaMap = Map<CmdName, ParsedSchema>;

/**
 * Parsed CLI schema.
 * @internal
 */
export interface ParsedSchema {
  /**
   * CLI option schema map.
   */
  opts: ParsedOptSchemaMap;
  /**
   * CLI command schema map.
   */
  cmds: ParsedCmdSchemaMap;
  /**
   * If CLI arguments are expected:
   * - Minimum number CLI arguments expected
   *
   * If CLI commands are expected:
   * - Is the command optional (0) or required (1).
   */
  minArgs: number;
  /**
   * If CLI arguments are expected:
   * - Maximum number CLI arguments expected
   *
   * If CLI commands are expected:
   * - Will be set to 1
   */
  maxArgs: number;
  /**
   * CLI argument filter (CLI commands are excluded).
   */
  argFilter: ArgFilter;
  /**
   * Does the CLI expect commands or arguments?
   */
  expectsCmd: boolean;
}
