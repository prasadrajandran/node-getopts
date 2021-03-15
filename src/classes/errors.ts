import { ArgFilter, OptArgFilter } from '../interfaces/schema';

export class SchemaError extends Error {
  name = 'SchemaError';
}

export class ParseError extends Error {
  name = 'ParseError';
  /**
   * Additional error data.
   */
  details = new Map<string, unknown>();
}

export class UnknownOptError extends ParseError {
  name = 'UnknownOptError';

  /**
   * Unknown CLI option error.
   * @param unknownOpt - Name of the unknown CLI option.
   */
  constructor(unknownOpt: string) {
    super(`"${unknownOpt}" not recognized`);
    this.details.set('unknownOpt', unknownOpt);
  }
}

export class UnknownCmdError extends ParseError {
  name = 'UnknownCmdError';

  /**
   * Unknown CLI command error.
   * @param unknownCmd - Name of the unknown CLI command.
   * @param expectedCmds - CLI commands that were expected.
   */
  constructor(unknownCmd: string, expectedCmds: string[]) {
    super(
      `Got "${unknownCmd}" but expected ` +
        `${expectedCmds.map((cmd) => `"${cmd}"`).join(', ')}`,
    );
    this.details.set('unknownCmd', unknownCmd);
    this.details.set('expectedCmds', expectedCmds);
  }
}

export class OptMissingArgError extends ParseError {
  name = 'OptMissingArgError';

  /**
   * CLI option missing argument error.
   * @param opt - CLI option that is missing its argument.
   */
  constructor(opt: string) {
    super(`${opt} requires an argument`);
    this.details.set('opt', opt);
  }
}

export class UnexpectedOptArgError extends ParseError {
  name = 'UnexpectedOptArgError';

  /**
   * Unexpected CLI option argument error.
   * @param opt - Option that received the unexpected argument.
   * @param arg - The unexpected argument the option (that doesn't accept
   *     arguments) was provided.
   */
  constructor(opt: string, arg: string) {
    super(`"${opt}" does not accept an argument but was given "${arg}"`);
    this.details.set('opt', opt);
    this.details.set('arg', arg);
  }
}

export class ArgFilterError extends ParseError {
  name = 'ArgFilterError';

  /**
   * CLI argument filter error.
   * @param arg - CLI argument value.
   * @param argFilter - CLI argument's filter that threw the exception.
   * @param argFilterError - Exception that was thrown by the CLI argument's
   *     filter.
   */
  constructor(
    arg: string,
    argFilter: ArgFilter,
    argFilterError: Error | unknown,
  ) {
    super(
      `Processing "${arg}" through the argument filter threw an exception: ` +
        `${
          argFilterError instanceof Error
            ? `${argFilterError.name} - ${argFilterError.message}`
            : argFilterError
        }`,
    );
    this.details.set('arg', arg);
    this.details.set('argFilter', argFilter);
    this.details.set('argFilterError', argFilterError);
  }
}

export class OptArgFilterError extends ParseError {
  name = 'OptArgFilterError';

  /**
   * CLI option argument filter error.
   * @param opt - CLI option that owns the filter that threw the exception.
   * @param arg - CLI option's argument that generated the exception.
   * @param argFilter - CLI option's argument filter that threw the exception.
   * @param argFilterError - Exception that was thrown by the CLI option's
   *     argument filter.
   */
  constructor(
    opt: string,
    arg: string,
    argFilter: OptArgFilter,
    argFilterError: Error | unknown,
  ) {
    super(
      `${opt}'s argument filter threw an exception when processing "${arg}": ` +
        `${
          argFilterError instanceof Error
            ? `${argFilterError.name} - ${argFilterError.message}`
            : argFilterError
        }`,
    );
    this.details.set('opt', opt);
    this.details.set('arg', arg);
    this.details.set('argFilter', argFilter);
    this.details.set('argFilterError', argFilterError);
  }
}

export class ExcessArgsError extends ParseError {
  name = 'ExcessArgsError';

  /**
   * Excess CLI arguments error.
   * @param excessArgs - The excess CLI arguments.
   * @param numArgsReceived - The total number of arguments the CLI received.
   * @param maxArgsExpected - The maximum number of arguments the CLI accepts.
   */
  constructor(
    excessArgs: string[],
    numArgsReceived: number,
    maxArgsExpected: number,
  ) {
    super(
      `Only ${maxArgsExpected} argument${maxArgsExpected > 1 ? 's' : ''} ` +
        `expected but got ${excessArgs.length > 1 ? 'these' : 'this'} ` +
        `${excessArgs.map((arg) => `"${arg}"`).join(', ')} additional ` +
        `argument${excessArgs.length > 1 ? 's' : ''}`,
    );
    this.details.set('excessArgs', excessArgs);
    this.details.set('numArgsReceived', numArgsReceived);
    this.details.set('maxArgsExpected', maxArgsExpected);
  }
}

export class InsufficientArgsError extends ParseError {
  name = 'InsufficientArgsError';

  /**
   * Insufficient CLI arguments error.
   * @param numArgsReceived - The total number of CLI arguments received.
   * @param minArgsExpected - The minimum number of arguments the CLI expects.
   */
  constructor(numArgsReceived: number, minArgsExpected: number) {
    super(
      `At least ${minArgsExpected} argument${
        minArgsExpected > 1 ? 's' : ''
      } expected but only got ${numArgsReceived}`,
    );
    this.details.set('numArgsReceived', numArgsReceived);
    this.details.set('minArgsExpected', minArgsExpected);
  }
}

export class CmdExpectedError extends ParseError {
  name = 'CmdExpectedError';

  /**
   * Expected CLI command error.
   * @param expectedCmds - CLI commands that were expected.
   */
  constructor(expectedCmds: string[]) {
    super(
      `The following ${expectedCmds.map((cmd) => `"${cmd}"`).join(', ')} ` +
        `was expected`,
    );
    this.details.set('expectedCmds', expectedCmds);
  }
}

export class DuplicateOptError extends ParseError {
  name = 'DuplicateOptError';

  /**
   * Duplicate CLI option error.
   * @param duplicateOpt - The duplicate option.
   */
  constructor(duplicateOpt: string) {
    super(`"${duplicateOpt}" was entered more than once`);
    this.details.set('duplicateOpt', duplicateOpt);
  }
}
