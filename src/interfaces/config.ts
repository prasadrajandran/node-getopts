/**
 * CLI parser config.
 */
export interface Config {
  /**
   * CLI input override. Will default to `process.argv.slice(2)`.
   *
   * Accepts a string or an array of strings. E.g.:
   * - "-n arg1 arg2"
   * - ["-n", "arg1", "arg2"]
   */
  argv?: string | string[];
}
