import { OptName, OptLongName } from '../interfaces/parsed_input';

/**
 * Map of a CLI option to its argument.
 */
export class OptMap extends Map<OptName | OptLongName, unknown> {
  /**
   * Retrieve an option's argument.
   * @param optName - Name of the option to retrieve. Also accepts an array of
   *     option names. The argument value of the first option that exists will
   *     returned if an array is provided.
   * @param defaultValue - This value will be returned instead if the option
   *     does not exist.
   * @returns If the option exists and accepts an argument, that argument will
   *     be returned. If the option exists and does not accept an argument,
   *     undefined will be returned instead. If the option does not exist,
   *     the default value will be returned (and if that is not set, undefined
   *     will be returned).
   */
  get(
    optName: OptName | OptLongName | (OptName | OptLongName)[],
    defaultValue?: unknown,
  ): unknown | unknown[] {
    for (const name of ([] as string[]).concat(optName)) {
      if (this.has(name)) {
        return Map.prototype.get.call(this, name);
      }
    }
    return defaultValue;
  }

  /**
   * Check if an option exists.
   * @param optName - The name of the option. This also accepts an array of
   *     option names. If an array is provided, true is returned if any one of
   *     those options exist.
   * @returns
   */
  has(optName: OptName | OptLongName | (OptName | OptLongName)[]): boolean {
    return ([] as string[]).concat(optName).some((name) => {
      return Map.prototype.has.call(this, name);
    });
  }
}
