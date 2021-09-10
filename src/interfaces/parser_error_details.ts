import { CmdName, OptLongName, OptName } from './parsed_input';
import { ArgFilter, OptArgFilter } from './schema';

/**
 * @internal
 */
export interface UnknownOptErrorDetails extends Record<string, unknown> {
  /**
   * Name of the unknown CLI option.
   */
  unknownOpt: OptName | OptLongName;
}

/**
 * @internal
 */
export interface UnknownCmdErrorDetails extends Record<string, unknown> {
  /**
   * Name of the unknown CLI command.
   */
  unknownCmd: CmdName;
  /**
   * CLI commands that were expected.
   */
  expectedCmds: CmdName[];
}

/**
 * @internal
 */
export interface OptMissingArgErrorDetails extends Record<string, unknown> {
  /**
   * CLI option that is missing its argument.
   */
  opt: OptName | OptLongName;
}

/**
 * @internal
 */
export interface UnexpectedOptArgErrorDetails extends Record<string, unknown> {
  /**
   * Option that received the unexpected argument.
   */
  opt: OptName | OptLongName;
  /**
   * The unexpected argument the option (that doesn't accept arguments) was
   * provided.
   */
  arg: string;
}

/**
 * @internal
 */
export interface ArgFilterErrorDetails extends Record<string, unknown> {
  /**
   * CLI argument value.
   */
  arg: string;
  /**
   * CLI argument's filter that threw the exception.
   */
  argFilter: ArgFilter;
  /**
   * Exception that was thrown by the CLI argument's filter.
   */
  argFilterError: Error | unknown;
}

/**
 * @internal
 */
export interface OptArgFilterErrorDetails extends Record<string, unknown> {
  /**
   * CLI option that owns the filter that threw the exception.
   */
  opt: OptName | OptLongName;
  /**
   * CLI option's argument that generated the exception.
   */
  arg: string;
  /**
   * CLI option's argument filter that threw the exception.
   */
  optArgFilter: OptArgFilter;
  /**
   * Exception that was thrown by the CLI option's argument filter.
   */
  optArgFilterError: Error | unknown;
}

/**
 * @internal
 */
export interface ExcessArgsErrorDetails extends Record<string, unknown> {
  /**
   * The excess CLI arguments.
   */
  excessArgs: string[];
  /**
   * The total number of arguments the CLI received.
   */
  numArgsReceived: number;
  /**
   * The maximum number of arguments the CLI accepts.
   */
  maxArgsExpected: number;
}

/**
 * @internal
 */
export interface InsufficientArgsErrorDetails extends Record<string, unknown> {
  /**
   * The total number of CLI arguments received.
   */
  numArgsReceived: number;
  /**
   * The minimum number of arguments the CLI expects.
   */
  minArgsExpected: number;
}

/**
 * @internal
 */
export interface CmdExpectedErrorDetails extends Record<string, unknown> {
  /**
   * CLI commands that were expected.
   */
  expectedCmds: CmdName[];
}

/**
 * @internal
 */
export interface DuplicateOptErrorDetails extends Record<string, unknown> {
  /**
   * The duplicate option.
   */
  duplicateOpt: OptName | OptLongName;
}

/**
 * @internal
 */
export interface DuplicateAliasOptErrorDetails extends Record<string, unknown> {
  /**
   * Option that was parsed.
   */
  parsedOpt: OptName | OptLongName;
  /**
   * Alias of parsed option.
   */
  aliasOpt: OptName | OptLongName;
}
