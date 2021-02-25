import { OptMap } from './opt_map';

/**
 * Parsed CLI arguments.
 */
export interface ParsedArgs {
  /**
   * Array of parsed CLI commands.
   */
  cmds: string[];
  /**
   * Map of parsed CLI options.
   */
  opts: OptMap;
  /**
   * Array of parsed CLI arguments.
   */
  args: unknown[];
  /**
   * Array of parsing/filter errors.
   */
  errors: Error[];
}
