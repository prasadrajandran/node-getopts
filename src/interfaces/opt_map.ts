import { OptLongName, OptName } from './config';

/**
 * CLI option's argument.
 */
export type OptArg = unknown;

/**
 * Map of a CLI option to its argument.
 *
 * Notes:
 * - If the CLI option does not accept an argument, its argument value will set
 *   to undefined.
 * - If the argument is optional and an argument wasn't provided, the argument
 *   value will be undefined.
 */
export type OptMap = Map<OptName | OptLongName, OptArg>;
