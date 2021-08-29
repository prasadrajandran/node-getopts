const setArgv = require('./set_argv');

/**
 * Clears everything after index 1 in `process.argv`.
 */
const resetArgv = () => setArgv('');

module.exports = resetArgv;
