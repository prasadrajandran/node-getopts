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
