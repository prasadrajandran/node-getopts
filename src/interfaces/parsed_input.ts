import { ParserError } from '../classes/errors';
import { OptMap } from '../classes/opt_map';

/**
 * CLI command name.
 * @internal
 */
export type CmdName = string;

/**
 * CLI option's name.
 * @internal
 */
export type OptName = string;

/**
 * CLI option's long name.
 * @internal
 */
export type OptLongName = string;

/**
 * CLI option's argument.
 * @internal
 */
export type OptArg = unknown;

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
  errors: ParserError[];
}
