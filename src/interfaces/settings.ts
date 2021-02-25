/**
 * CLI parser settings.
 */
export interface Settings {
  /**
   * CLI input override. Will default to `process.argv.slice(2)`.
   */
  argv?: string[];
}
