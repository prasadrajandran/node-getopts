import { OptLongName, OptName } from './config';

/**
 * CLI option's argument.
 */
export type OptArg = unknown;

/**
 * Map of a CLI option's name to its arguments.
 *
 * Note:
 * - It's mapped to an array because all CLI options are capable of receiving
 *   multiple arguments. This can be done by simply repeating the option.
 *   Example:
 *   someutility -n5 -n10 -n12 run
 */
export type OptMap = Map<OptName | OptLongName, OptArg[]>;
