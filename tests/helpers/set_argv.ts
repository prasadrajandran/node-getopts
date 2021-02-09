/**
 * Converts `input` into an array (separated by spaces) and adds that to
 * `process.argv` (after index 1).
 * @param input
 */
export const setArgv = (input: string): void => {
  process.argv = [process.argv[0], process.argv[1]].concat(input.split(' '));
};
