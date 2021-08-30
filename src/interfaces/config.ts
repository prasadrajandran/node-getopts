import { ParsedInput } from './parsed_input';

/**
 * Default option name of the help option hook.
 * @internal
 */
export const DEFAULT_HELP_OPT_HOOK_OPT_NAME = '--help';

/**
 * Default process exit code for the help option hook.
 * @internal
 */
export const DEFAULT_HELP_OPT_HOOK_EXIT_CODE = 0;

/**
 * Default option name of the version option hook.
 * @internal
 */
export const DEFAULT_VERSION_OPT_HOOK_OPT_NAME = '--version';

/**
 * Default process exit code for the version option hook.
 * @internal
 */
export const DEFAULT_VERSION_OPT_HOOK_EXIT_CODE = 0;

/**
 * Default process exit code for the parser error hook.
 * @internal
 */
export const DEFAULT_PARSER_ERROR_HOOK_EXIT_CODE = 1;

interface HookCallback {
  (arg: ParsedInput): void;
}

export interface HelpOptHook {
  /**
   * Name of the version option. Defaults to "--help"
   *
   * Note: This option must also be defined in the schema.
   */
  name?: string | string[];
  /**
   * If the hook is activated, it will terminate the process after the callback
   * is executed. This behaviour can be disabled by setting it to false. The
   * default is 0.
   *
   * @see {@link https://nodejs.org/api/process.html#process_exit_codes}
   */
  exitCode?: false | number;
  /**
   * Callback to execute if the hook is activated. E.g. log help info to
   * stdout.
   */
  callback: HookCallback;
}

export interface VersionOptHook {
  /**
   * Name of the version option. Defaults to "--version"
   *
   * Note: This option must also be defined in the schema.
   */
  name?: string | string[];
  /**
   * If the hook is activated, it will terminate the process after the callback
   * is executed. This behaviour can be disabled by setting it to false. The
   * default is 0.
   *
   * @see {@link https://nodejs.org/api/process.html#process_exit_codes}
   */
  exitCode?: false | number;
  /**
   * Callback to execute if the hook is activated. E.g. log version info to
   * stdout.
   */
  callback: HookCallback;
}

export interface ParserErrorsHook {
  /**
   * If the hook is activated, it will terminate the process after the callback
   * is executed. This behaviour can be disabled by setting it to false. The
   * default is 1.
   *
   * @see {@link https://nodejs.org/api/process.html#process_exit_codes}
   */
  exitCode?: false | number;
  /**
   * Callback to execute if the hook is activated. E.g. log error messages to
   * stderr.
   */
  callback: HookCallback;
}

/**
 * CLI parser config hooks.
 */
export interface ConfigHooks {
  /**
   * Hook for the "help" option.
   */
  helpOpt?: HelpOptHook;
  /**
   * Hook for the "version" option.
   */
  versionOpt?: VersionOptHook;
  /**
   * Hook for parser errors.
   */
  parserErrors?: ParserErrorsHook;
}

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
  /**
   * Hooks that can be used to simplify CLI behaviour when:
   * (1) the help option is activated
   * (2) the version option is activated
   * (3) the occurrence of parser errors
   *
   * The hooks are listed in order of activation priority. This means that if
   * both (1) and (2) are activated, only (1) will run.
   */
  hooks?: ConfigHooks;
}
