/**
 * Callback to filter argument(s).
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
 * Callback to filter an option's argument(s).
 */
export interface OptArgFilter {
  /**
   * @param arg - Argument value.
   */
  (arg: string): unknown;
}

/**
 * Schema for an option.
 */
export interface OptSchema {
  /**
   * Name of the option.
   * E.g.: "-a", "-A", etc.
   */
  name?: string;
  /**
   * Long name of the option.
   * E.g.: "--sort-by", "--append", etc.
   */
  longName?: string;
  /**
   * Does the option accept an argument? If so, is the argument required or
   * optional.
   * Note: It is automatically assumed that the option takes an argument if
   * this property is defined.
   */
  arg?: 'required' | 'optional';
  /**
   * Pass the option's argument through a filter for processing.
   * E.g. convert it to a number, etc.
   */
  argFilter?: OptArgFilter;
}

/**
 * Schema for a command.
 */
// eslint-disable-next-line no-use-before-define
export interface CmdSchema extends Schema {
  /**
   * Name of the command.
   */
  name: string;
}

/**
 * Schema.
 */
export interface Schema {
  /**
   * Options.
   */
  opts?: OptSchema[];
  /**
   * Commands.
   */
  cmds?: CmdSchema[];
  /**
   * Minimum number of arguments (i.e. arguments that are not options or
   * commands) expected.
   * Note: The default is 0.
   */
  minArgs?: number;
  /**
   * Maximum number of arguments (i.e. arguments that are not options or
   * commands) expected.
   * Note: The default is Infinity.
   */
  maxArgs?: number;
  /**
   * Pass the arguments through a filter for processing.
   */
  argFilter?: ArgFilter;
}
