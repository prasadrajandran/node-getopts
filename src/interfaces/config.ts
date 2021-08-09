import { OptName, OptLongName } from './opt_map';
import { ArgFilter, OptArgFilter } from './schema';

/**
 * A CLI option's configuration object.
 * @internal
 */
export interface OptConfig {
  /**
   * Does the CLI option accept an argument?
   */
  argAccepted: boolean;
  /**
   * Does the CLI option require an argument?
   */
  argRequired: boolean;
  /**
   * Process the CLI option's argument.
   */
  argFilter: OptArgFilter;
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
  parsed: OptName | OptLongName | false;
}

/**
 * Map of a CLI option's name to its configuration object.
 * @internal
 */
export type OptConfigMap = Map<OptName | OptLongName, OptConfig>;

/**
 * CLI command's name.
 * @internal
 */
export type CmdName = string;

/**
 * Map of a CLI command's name to its configuration object.
 * @internal
 */
// eslint-disable-next-line no-use-before-define
export type CmdConfigMap = Map<CmdName, Config>;

/**
 * CLI config.
 * @internal
 */
export interface Config {
  /**
   * CLI option config map.
   */
  opts: OptConfigMap;
  /**
   * CLI command config map.
   */
  cmds: CmdConfigMap;
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
