import { OptLongName, OptName } from './parsed_input';

/**
 * Callback function to filter CLI argument(s).
 */
export interface ArgFilter {
  /**
   * @param arg - Argument value.
   * @param pos - Position of the argument. Starts from 0.
   *     E.g. someutility arg0 arg1 arg2...
   */
  (arg: string, pos: number): unknown;
}

/**
 * Callback function to filter a CLI option's argument.
 */
export interface OptArgFilter {
  /**
   * @param arg - Argument value.
   */
  (arg: string): unknown;
}

export interface OptArgSchema {
  /**
   * Is the CLI option's argument required (true) or optional (false)?
   *
   * Note: Only long options support optional arguments. So if this is set to
   * false, at least one long option must be defined.
   */
  required: boolean;
  /**
   * Can the CLI option be repeated so that its arguments are stored in an
   * array? The default is false.
   */
  multiple?: boolean;
  /**
   * Run the CLI option's argument through a filter.
   *
   * Example use cases:
   * - Input validation (is it within some defined range)
   * - Type casting (convert the string to a number)
   *
   * Note: Filters are executed within a try/catch block. If an error is thrown,
   * it will be captured and stored inside the `errors` array.
   */
  filter?: OptArgFilter;
}

/**
 * Schema for a CLI option.
 */
export interface OptSchema {
  /**
   * Name or long name of the CLI option. Also accepts an array of names.
   *
   * Examples:
   * - "-a", "-A", etc.
   * - "--sort-by", "--append", etc.
   * - ["-S", "--sort-by"]
   * - ["-S", "--sort", "--sort-by"]
   */
  name: OptName | OptLongName | (OptName | OptLongName)[];
  /**
   * Configuration object of the CLI option (if applicable).
   */
  arg?: OptArgSchema;
}

export interface ArgsSchema {
  /**
   * Minimum number of CLI arguments expected.
   *
   * If the CLI expects arguments (i.e. `cmds` is undefined):
   * - The default is 0 (arguments are optional)
   *
   * If the CLI expects commands (i.e. `cmds` is defined):
   * - The only valid values are 0 (command is optional) or 1 (command is
   *   required)
   * - The default is 1 (command is required)
   */
  min?: number;
  /**
   * Maximum number of CLI arguments expected.
   *
   * If the CLI expects arguments (i.e. `cmds` is undefined):
   * - The default is 0 (arguments are optional)
   *
   * If the CLI expects commands (i.e. `cmds` is defined):
   * - The only valid value is 1. This should ideally be left undefined if
   *   commands are expected.
   */
  max?: number;
  /**
   * Run the CLI arguments through a filter.
   *
   * Example use cases:
   * - Input validation (is it within some defined range)
   * - Type casting (convert the string to a number)
   *
   * Notes:
   * - This filter is only meant to process arguments. If `cmds` is defined,
   *   this filter will be ignored.
   * - Filters are executed within a try/catch block. If an error is thrown, it
   *   will be captured and stored inside the `errors` array.
   */
  filter?: ArgFilter;
}

/**
 * Schema for a CLI command.
 */
// eslint-disable-next-line no-use-before-define
export interface CmdSchema extends Schema {
  /**
   * Name of the CLI command. Also accepts an array of names.
   */
  name: string | string[];
}

/**
 * CLI schema.
 */
export interface Schema {
  /**
   * CLI options.
   *
   * Define all options that the CLI is capable of receiving here.
   */
  opts?: OptSchema[];
  /**
   * CLI commands.
   *
   * Define all commands that the CLI is capable of receiving here.
   *
   * If this is defined, it is assumed that the CLI expects commands instead of
   * arguments (this affects what `minArgs` and `maxArgs` do).
   */
  cmds?: CmdSchema[];
  /**
   * CLI arguments.
   */
  args?: ArgsSchema;
}
