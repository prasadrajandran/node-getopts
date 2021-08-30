import { CmdName } from '../interfaces/parsed_schema';
import { OptLongName, OptName } from '../interfaces/parsed_input';
import { ArgFilter, OptArgFilter } from '../interfaces/schema';

/**
 * @internal
 */
export class SchemaError extends Error {
  name = 'SchemaError';
}

export class ParserError extends Error {
  name = 'ParserError';
  /**
   * Additional error data.
   */
  details = new Map<string, unknown>();
}

export class UnknownOptError extends ParserError {
  name = 'UnknownOptError';

  /**
   * Unknown CLI option error.
   * @param unknownOpt - Name of the unknown CLI option.
   */
  constructor(unknownOpt: OptName | OptLongName) {
    super(`"${unknownOpt}" not recognized`);
    this.details.set('unknownOpt', unknownOpt);
  }
}

export class UnknownCmdError extends ParserError {
  name = 'UnknownCmdError';

  /**
   * Unknown CLI command error.
   * @param unknownCmd - Name of the unknown CLI command.
   * @param expectedCmds - CLI commands that were expected.
   */
  constructor(unknownCmd: string, expectedCmds: CmdName[]) {
    super(`"${unknownCmd}" not recognized`);
    this.details.set('unknownCmd', unknownCmd);
    this.details.set('expectedCmds', expectedCmds);
  }
}

export class OptMissingArgError extends ParserError {
  name = 'OptMissingArgError';

  /**
   * CLI option missing argument error.
   * @param opt - CLI option that is missing its argument.
   */
  constructor(opt: OptName | OptLongName) {
    super(`${opt} requires an argument`);
    this.details.set('opt', opt);
  }
}

export class UnexpectedOptArgError extends ParserError {
  name = 'UnexpectedOptArgError';

  /**
   * Unexpected CLI option argument error.
   * @param opt - Option that received the unexpected argument.
   * @param arg - The unexpected argument the option (that doesn't accept
   *     arguments) was provided.
   */
  constructor(opt: OptLongName, arg: string) {
    super(`"${opt}" does not accept an argument`);
    this.details.set('opt', opt);
    this.details.set('arg', arg);
  }
}

export class ArgFilterError extends ParserError {
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
      `Filtering "${arg}" raised an exception: ` +
        `${
          argFilterError instanceof Error
            ? `${argFilterError.name}: ${argFilterError.message}`
            : argFilterError
        }`,
    );
    this.details.set('arg', arg);
    this.details.set('argFilter', argFilter);
    this.details.set('argFilterError', argFilterError);
  }
}

export class OptArgFilterError extends ParserError {
  name = 'OptArgFilterError';

  /**
   * CLI option argument filter error.
   * @param opt - CLI option that owns the filter that threw the exception.
   * @param arg - CLI option's argument that generated the exception.
   * @param optArgFilter - CLI option's argument filter that threw the
   *      exception.
   * @param optArgFilterError - Exception that was thrown by the CLI option's
   *     argument filter.
   */
  constructor(
    opt: OptName | OptLongName,
    arg: string,
    optArgFilter: OptArgFilter,
    optArgFilterError: Error | unknown,
  ) {
    super(
      `Filtering "${arg}" through ${opt}'s filter raised an exception: ` +
        `${
          optArgFilterError instanceof Error
            ? `${optArgFilterError.name}: ${optArgFilterError.message}`
            : optArgFilterError
        }`,
    );
    this.details.set('opt', opt);
    this.details.set('arg', arg);
    this.details.set('optArgFilter', optArgFilter);
    this.details.set('optArgFilterError', optArgFilterError);
  }
}

export class ExcessArgsError extends ParserError {
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
      maxArgsExpected === 0
        ? 'Did not expect to receive arguments'
        : 'Too many arguments received',
    );
    this.details.set('excessArgs', excessArgs);
    this.details.set('numArgsReceived', numArgsReceived);
    this.details.set('maxArgsExpected', maxArgsExpected);
  }
}

export class InsufficientArgsError extends ParserError {
  name = 'InsufficientArgsError';

  /**
   * Insufficient CLI arguments error.
   * @param numArgsReceived - The total number of CLI arguments received.
   * @param minArgsExpected - The minimum number of arguments the CLI expects.
   */
  constructor(numArgsReceived: number, minArgsExpected: number) {
    super(
      minArgsExpected === 1 ? 'Argument expected' : 'More arguments expected',
    );
    this.details.set('numArgsReceived', numArgsReceived);
    this.details.set('minArgsExpected', minArgsExpected);
  }
}

export class CmdExpectedError extends ParserError {
  name = 'CmdExpectedError';

  /**
   * Expected CLI command error.
   * @param expectedCmds - CLI commands that were expected.
   */
  constructor(expectedCmds: CmdName[]) {
    super('Command expected');
    this.details.set('expectedCmds', expectedCmds);
  }
}

export class DuplicateOptError extends ParserError {
  name = 'DuplicateOptError';

  /**
   * Duplicate CLI option error.
   * @param duplicateOpt - The duplicate option.
   */
  constructor(duplicateOpt: OptName | OptLongName) {
    super(`"${duplicateOpt}" received multiple times`);
    this.details.set('duplicateOpt', duplicateOpt);
  }
}

export class DuplicateAliasOptError extends ParserError {
  name = 'DuplicateAliasOptError';

  /**
   * Duplicate alias CLI option error.
   * @param parsedOpt - Option that was parsed.
   * @param aliasOpt - Alias of parsed option.
   */
  constructor(
    parsedOpt: OptName | OptLongName,
    aliasOpt: OptName | OptLongName,
  ) {
    super(`"${parsedOpt}" and "${aliasOpt}" are aliases`);
    this.details.set('parsedOpt', parsedOpt);
    this.details.set('aliasOpt', aliasOpt);
  }
}
