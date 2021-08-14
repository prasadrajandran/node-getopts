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

/**
 * Schema for a CLI option.
 */
export interface OptSchema {
  /**
   * Name of the CLI option.
   * E.g.: "-a", "-A", etc.
   */
  name?: string;
  /**
   * Long name of the CLI option.
   * E.g.: "--sort-by", "--append", etc.
   */
  longName?: string;
  /**
   * Specify if the CLI option accepts an argument. If so, further specify if
   * the argument is required or optional.
   *
   * Notes:
   * - If this is defined, it is automatically assumed that the option accepts
   *   an argument.
   * - Only the long option is capable of receiving an optional argument.
   */
  arg?: 'required' | 'optional';
  /**
   * Pass the CLI option's argument through a filter.
   *
   * Example use cases:
   * - Input validation (is it within some defined range)
   * - Type casting (convert the string to a number)
   * - etc
   *
   * Notes:
   * - Filters are executed within a try/catch block. If an error is thrown, it
   *   will be captured and stored inside the `errors` array.
   */
  optArgFilter?: OptArgFilter;
}

/**
 * Schema for a CLI command.
 */
// eslint-disable-next-line no-use-before-define
export interface CmdSchema extends Schema {
  /**
   * Name of the CLI command.
   */
  name: string;
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
   * CLI Commands.
   *
   * Define all commands that the CLI is capable of receiving here.
   *
   * If this is defined, it is assumed that the CLI expects commands instead of
   * arguments (this affects what `minArgs` and `maxArgs` do).
   */
  cmds?: CmdSchema[];
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
  minArgs?: number;
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
  maxArgs?: number;
  /**
   * Pass the CLI arguments through a filter.
   *
   * Example use cases:
   * - Input validation (is it within some defined range)
   * - Type casting (convert the string to a number)
   * - etc
   *
   * Notes:
   * - This filter is only meant to process arguments. If `cmds` is defined,
   *   this filter will be ignored.
   * - Filters are executed within a try/catch block. If an error is thrown, it
   *   will be captured and stored inside the `errors` array.
   */
  argFilter?: ArgFilter;
}
