import {
  UnknownCmdErrorDetails,
  UnknownOptErrorDetails,
  OptMissingArgErrorDetails,
  UnexpectedOptArgErrorDetails,
  ArgFilterErrorDetails,
  OptArgFilterErrorDetails,
  ExcessArgsErrorDetails,
  InsufficientArgsErrorDetails,
  CmdExpectedErrorDetails,
  DuplicateOptErrorDetails,
  DuplicateAliasOptErrorDetails,
} from '../interfaces/errors';

/**
 * @internal
 */
export class SchemaError extends Error {
  name = 'SchemaError';
  /**
   * Schema Error.
   * @param message - Schema error message.
   */
  constructor(message?: string) {
    super(message || 'error message truncated on production environment');
  }
}

/**
 * @internal
 */
export class ParserError<T> extends Error {
  name = 'ParserError';
  /**
   * Additional error data.
   */
  details: T;

  /**
   * Construct a new parser error.
   * @param message - Error message.
   * @param details - Additional error data.
   */
  constructor(message: string, details: T) {
    super(message);
    this.details = details;
  }
}

export class UnknownOptError extends ParserError<UnknownOptErrorDetails> {
  name = 'UnknownOptError';
  constructor(details: UnknownOptErrorDetails) {
    super(`unknown option "${details.unknownOpt}"`, details);
  }
}

export class UnknownCmdError extends ParserError<UnknownCmdErrorDetails> {
  name = 'UnknownCmdError';
  constructor(details: UnknownCmdErrorDetails) {
    super(`unknown command "${details.unknownCmd}"`, details);
  }
}

export class OptMissingArgError extends ParserError<OptMissingArgErrorDetails> {
  name = 'OptMissingArgError';
  constructor(details: OptMissingArgErrorDetails) {
    super(`"${details.opt}" expects an argument`, details);
  }
}

export class UnexpectedOptArgError extends ParserError<UnexpectedOptArgErrorDetails> {
  name = 'UnexpectedOptArgError';
  constructor(details: UnexpectedOptArgErrorDetails) {
    super(`"${details.opt}" does not accept an argument`, details);
  }
}

export class ArgFilterError extends ParserError<ArgFilterErrorDetails> {
  name = 'ArgFilterError';
  constructor(details: ArgFilterErrorDetails) {
    super(
      `exception thrown when filtering "${details.arg}": ` +
        `${
          details.argFilterError instanceof Error
            ? `${details.argFilterError.name}: ${details.argFilterError.message}`
            : details.argFilterError
        }`,
      details,
    );
  }
}

export class OptArgFilterError extends ParserError<OptArgFilterErrorDetails> {
  name = 'OptArgFilterError';
  constructor(details: OptArgFilterErrorDetails) {
    super(
      `exception thrown when filtering ${details.opt}` +
        `${details.opt.startsWith('--') ? '=' : ' '}"${details.arg}": ` +
        `${
          details.optArgFilterError instanceof Error
            ? `${details.optArgFilterError.name}: ` +
              details.optArgFilterError.message
            : details.optArgFilterError
        }`,
      details,
    );
  }
}

export class ExcessArgsError extends ParserError<ExcessArgsErrorDetails> {
  name = 'ExcessArgsError';
  constructor(details: ExcessArgsErrorDetails) {
    super(
      details.maxArgsExpected === 0
        ? `unexpected argument${details.numArgsReceived > 1 ? 's' : ''}`
        : 'too many arguments',
      details,
    );
  }
}

export class InsufficientArgsError extends ParserError<InsufficientArgsErrorDetails> {
  name = 'InsufficientArgsError';
  constructor(details: InsufficientArgsErrorDetails) {
    super(
      details.minArgsExpected === 1
        ? 'argument expected'
        : 'more arguments expected',
      details,
    );
  }
}

export class CmdExpectedError extends ParserError<CmdExpectedErrorDetails> {
  name = 'CmdExpectedError';
  constructor(details: CmdExpectedErrorDetails) {
    super('command expected', details);
  }
}

export class DuplicateOptError extends ParserError<DuplicateOptErrorDetails> {
  name = 'DuplicateOptError';
  constructor(details: DuplicateOptErrorDetails) {
    super(`"${details.duplicateOpt}" received multiple times`, details);
  }
}

export class DuplicateAliasOptError extends ParserError<DuplicateAliasOptErrorDetails> {
  name = 'DuplicateAliasOptError';
  constructor(details: DuplicateAliasOptErrorDetails) {
    super(
      `"${details.parsedOpt}" and "${details.aliasOpt}" are aliases`,
      details,
    );
  }
}
