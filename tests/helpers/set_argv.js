/**
 * Converts `input` into an array (separated by spaces) and adds that to
 * `process.argv` (after index 1).
 * @param {string} input
 */
const setArgv = (input) => {
  process.argv = [process.argv[0], process.argv[1]];
  if (input) {
    process.argv = process.argv.concat(input.split(' '));
  }
};

module.exports = setArgv;
