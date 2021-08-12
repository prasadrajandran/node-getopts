/**
 * CLI parser config.
 */
export interface Config {
  /**
   * CLI input override. Will default to `process.argv.slice(2)`.
   */
  argv?: string[];
}
