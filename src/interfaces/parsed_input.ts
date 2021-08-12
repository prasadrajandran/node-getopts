import { ParseError } from '../classes/errors'; // rename to parsererror?

/**
 * CLI option's name.
 */
export type OptName = string;

/**
 * CLI option's long name.
 */
export type OptLongName = string;

/**
 * CLI option's argument.
 */
export type OptArg = unknown;

/**
 * Map of a CLI option to its argument.
 *
 * Notes:
 * - If the CLI option does not accept an argument, its argument value will be
 *   undefined.
 * - If the argument is optional and an argument wasn't provided, the argument
 *   value will be undefined.
 */
export type OptMap = Map<OptName | OptLongName, OptArg>;

/**
 * Parsed CLI input.
 */
export interface ParsedInput {
  /**
   * Parsed CLI commands.
   */
  cmds: string[];
  /**
   * Parsed CLI options.
   */
  opts: OptMap;
  /**
   * Parsed CLI arguments.
   */
  args: unknown[];
  /**
   * Parser, argument filter, and option filter errors.
   */
  errors: ParseError[];
}
