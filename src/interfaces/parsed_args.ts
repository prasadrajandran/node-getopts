import { Config } from './config';
import { OptMap } from './opt_map';
import { ParsingError } from './parsing_error';

/**
 * Parsed CLI arguments.
 */
export interface ParsedArgs {
  /**
   * Parsed CLI schema.
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
   * CLI arguments that were parsed.
   */
  input: string;
  /**
   * Array of parsed commands.
   */
  cmds: string[];
  /**
   * Map of parsed options.
   */
  opts: OptMap;
  /**
   * Array of parsed arguments.
   */
  args: unknown[];
  /**
   * Array of any parsing errors.
   */
  errors: ParsingError[];
}
