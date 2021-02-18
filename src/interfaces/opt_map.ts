import { OptLongName, OptName } from './config';

/**
 * Option's argument.
 */
export type OptArg = unknown;

/**
 * Map of an option's name to its arguments.
 */
export type OptMap = Map<OptName | OptLongName, OptArg[]>;
