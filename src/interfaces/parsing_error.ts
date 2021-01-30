/**
 * Parsing error types.
 */
export type ParsingErrorType =
  | 'UNKNOWN_OPT'
  | 'UNKNOWN_CMD'
  | 'OPT_REQUIRES_ARG'
  | 'OPT_ARG_FILTER_FAILED'
  | 'ARG_FILTER_FAILED'
  | 'TOO_MANY_ARGS'
  | 'TOO_FEW_ARGS';

/**
 * Parsing error.
 */
export interface ParsingError {
  /**
   * Error type.
   */
  type: ParsingErrorType;
  /**
   * Error message.
   */
  msg: string;
  /**
   * Error object (if a native Error was thrown).
   */
  err?: Error;
}
