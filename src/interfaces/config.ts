import { ArgFilter, OptArgFilter } from './schema';

/**
 * An option's name.
 */
export type OptName = string;

/**
 * An option's long name.
 */
export type OptLongName = string;

/**
 * An option's configuration object.
 */
export interface OptConfig {
  /**
   * Does the option accept arguments?
   */
  argAccepted: boolean;
  /**
   * Does the option require arguments?
   */
  argRequired: boolean;
  /**
   * Process the argument.
   */
  argFilter: OptArgFilter;
}

/**
 * Map of an option's name to its configuration object.
 */
export type OptConfigMap = Map<OptName | OptLongName, OptConfig>;

/**
 * Command's name.
 */
export type CmdName = string;

/**
 * Map of an command's name to its configuration object.
 */
// eslint-disable-next-line no-use-before-define
export type CmdConfigMap = Map<CmdName, Config>;

/**
 * Configuration object.
 */
export interface Config {
  /**
   * Option map.
   */
  opts: OptConfigMap;
  /**
   * Command map.
   */
  cmds: CmdConfigMap;
  /**
   * Minimum number of arguments required.
   */
  minArgs: number;
  /**
   * Maximum number of arguments accepted.
   */
  maxArgs: number;
  /**
   * Argument filter.
   */
  argFilter: ArgFilter;
  /**
   * Does it expect commands (true) or arguments (false)?
   */
  expectsCmd: boolean;
}
