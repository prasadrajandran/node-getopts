import { ArgFilter, OptArgFilter } from '../interfaces/schema';

export class SchemaError extends Error {
  name = 'SchemaError';
}

export class UnknownOptError extends Error {
  name = 'UnknownOptError';
  /**
   * Name of the unknown CLI option.
   */
  unknownOpt: string;

  /**
   * Unknown CLI option error.
   * @param message - Error message.
   * @param unknownOpt - Name of the unknown CLI option.
   */
  constructor(message: string, unknownOpt: string) {
    super(message);
    this.unknownOpt = unknownOpt;
  }
}

export class UnknownCmdError extends Error {
  name = 'UnknownCmdError';
  /**
   * Name of the unknown CLI command
   */
  unknownCmd: string;
  /**
   * CLI commands that were expected.
   */
  expectedCmds: string[];

  /**
   * Unknown CLI command error.
   * @param message - Error message.
   * @param unknownCmd - Name of the unknown CLI command.
   * @param expectedCmds - CLI commands that were expected.
   */
  constructor(message: string, unknownCmd: string, expectedCmds: string[]) {
    super(message);
    this.unknownCmd = unknownCmd;
    this.expectedCmds = expectedCmds;
  }
}

export class OptMissingArgError extends Error {
  name = 'OptMissingArgError';
  /**
   * CLI option that is missing its argument.
   */
  opt: string;

  /**
   * CLI option missing argument error.
   * @param message - Error message.
   * @param opt - CLI option that is missing its argument.
   */
  constructor(message: string, opt: string) {
    super(message);
    this.opt = opt;
  }
}

export class UnexpectedOptArgError extends Error {
  name = 'UnexpectedOptArgError';
  /**
   * The unexpected argument the option (that doesn't accept arguments) was
   * provided.
   */
  unexpectedOptArg: string;

  /**
   * Unexpected Option Argument Error.
   * @param message - Error message.
   * @param unexpectedOptArg - The unexpected argument the option (that doesn't
   * accept arguments) was provided.
   */
  constructor(message: string, unexpectedOptArg: string) {
    super(message);
    this.unexpectedOptArg = unexpectedOptArg;
  }
}

export class ArgFilterError extends Error {
  name = 'ArgFilterError';
  /**
   * CLI argument value.
   */
  arg: string;
  /**
   * CLI argument's position (starting from 0).
   */
  argPos: number;
  /**
   * CLI argument's filter that threw the exception.
   */
  argFilter: ArgFilter;
  /**
   * Exception that was thrown by the CLI argument's filter.
   */
  argFilterError: Error;

  /**
   * CLI argument filter error.
   * @param message - Error message.
   * @param arg - CLI argument value.
   * @param argPos - CLI argument's position (starting from 0).
   * @param argFilter - CLI argument's filter that threw the exception.
   * @param argFilterError - Exception that was thrown by the CLI argument's
   *     filter.
   */
  constructor(
    message: string,
    arg: string,
    argPos: number,
    argFilter: ArgFilter,
    argFilterError: Error,
  ) {
    super(message);
    this.arg = arg;
    this.argPos = argPos;
    this.argFilter = argFilter;
    this.argFilterError = argFilterError;
  }
}

export class OptArgFilterError extends Error {
  name = 'OptArgFilterError';
  /**
   * CLI option that owns the filter that threw the exception.
   */
  opt: string;
  /**
   * CLI option's argument that generated the exception.
   */
  arg: string;
  /**
   * CLI option's argument filter that threw the exception.
   */
  argFilter: OptArgFilter;
  /**
   * Exception that was thrown by the CLI option's argument filter.
   */
  argFilterError: Error;

  /**
   * CLI option argument filter error.
   * @param message - Error message.
   * @param opt - CLI option that owns the filter that threw the exception.
   * @param arg - CLI option's argument that generated the exception.
   * @param argFilter - CLI option's argument filter that threw the exception.
   * @param argFilterError - Exception that was thrown by the CLI option's
   *     argument filter.
   */
  constructor(
    message: string,
    opt: string,
    arg: string,
    argFilter: OptArgFilter,
    argFilterError: Error,
  ) {
    super(message);
    this.opt = opt;
    this.arg = arg;
    this.argFilter = argFilter;
    this.argFilterError = argFilterError;
  }
}

export class ExcessArgsError extends Error {
  name = 'ExcessArgsError';
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

  /**
   * Too many CLI arguments error.
   * @param message - Error message.
   * @param excessArgs - The excess CLI arguments.
   * @param numArgsReceived - The total number of arguments the CLI received.
   * @param maxArgsExpected - The maximum number of arguments the CLI accepts.
   */
  constructor(
    message: string,
    excessArgs: string[],
    numArgsReceived: number,
    maxArgsExpected: number,
  ) {
    super(message);
    this.excessArgs = excessArgs;
    this.numArgsReceived = numArgsReceived;
    this.maxArgsExpected = maxArgsExpected;
  }
}

export class InsufficientArgsError extends Error {
  name = 'InsufficientArgsError';
  /**
   * The total number of CLI arguments received.
   */
  numArgsReceived: number;
  /**
   * The minimum number of arguments the CLI expects.
   */
  minArgsExpected: number;

  /**
   * Too few CLI arguments error.
   * @param message - Error message.
   * @param numArgsReceived - The total number of CLI arguments received.
   * @param minArgsExpected - The minimum number of arguments the CLI expects.
   */
  constructor(
    message: string,
    numArgsReceived: number,
    minArgsExpected: number,
  ) {
    super(message);
    this.numArgsReceived = numArgsReceived;
    this.minArgsExpected = minArgsExpected;
  }
}

export class CmdExpectedError extends Error {
  name = 'CmdExpectedError';
  /**
   * CLI commands that were expected.
   */
  expectedCmds: string[];

  /**
   * Expected CLI command error.
   * @param message - Error message.
   * @param expectedCmds - CLI commands that were expected.
   */
  constructor(message: string, expectedCmds: string[]) {
    super(message);
    this.expectedCmds = expectedCmds;
  }
}

export class DuplicateOptError extends Error {
  name = 'DuplicateOptError';
  /**
   * The duplicate option.
   */
  duplicateOpt: string;
  /**
   * Number of times the option was entered (i.e. starting from 2).
   */
  count: number;

  /**
   * Duplicate Option Error.
   * @param message - Error message.
   * @param duplicateOpt - The duplicate option.
   * @param count - Number of times the option was entered (i.e. starting from
   *     2).
   */
  constructor(message: string, duplicateOpt: string, count: number) {
    super(message);
    this.duplicateOpt = duplicateOpt;
    this.count = count;
  }
}
