/**
 * Strip comments from all the distribution JS files (i.e. the TypeScript
 * declaration files are skipped).
 *
 * In its current state, there isn't an option in tsconfig to strip comments
 * from the JS files only.
 * @see https://github.com/microsoft/TypeScript/issues/14619 for more
 *     information.
 */

const fs = require('fs');
const path = require('path');
const strip = require('strip-comments');

const DIR = path.join(__dirname, 'dist');

fs.readdirSync(DIR, { encoding: 'utf-8' })
  .filter((file) => file.match(/\.js$/))
  .map((file) => path.join(DIR, file))
  .forEach((filename) => {
    fs.writeFileSync(
      filename,
      strip(fs.readFileSync(filename, { encoding: 'utf-8', flag: 'r' })),
      { encoding: 'utf-8', flag: 'w' },
    );
  });
