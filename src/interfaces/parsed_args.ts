import { Config } from './config';
import { OptMap } from './opt_map';

/**
 * Parsed CLI arguments.
 */
export interface ParsedArgs {
  /**
   * Parsed CLI schema.
   *
   * Note: can be used to verify if the CLI schema was properly parsed.
   */
  config: Config;
  /**
   * Absolute pathname of the executable that started the Node.js process.
   */
  execPath: string;
  /**
   * Path to the JavaScript file being executed.
   */
  module: string;
  /**
   * CLI input.
   */
  input: string;
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
