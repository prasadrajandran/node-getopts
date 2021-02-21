# getopts

Utility program that parses command line arguments for you. The CLI of your
program is expected to adhere to the POSIX/GNU conventions. The POSIX/GNU
conventions can be found [here](https://www.gnu.org/software/libc/manual/html_node/Argument-Syntax.html).

## Highlights

- Adheres POSIX/GNU conventions
- Strict option/argument/command input validation
  - All errors are collected into an array
- Subcommand support (infinite nesting)
  - All subcommands support their own set of options and arguments
- Argument filters (including option arguments)
  - Argument validation
  - Type casting
  - etc.

## How Do I Use It?

Full API documentation can be found [here](https://github.com/prasadrajandran/node-getopts/tree/main/docs).

### Installation

```
npm i @prasadrajandran/getopts
```

### Example

```javascript
const { getopts } = require('@prasadrajandran/getopts');

const { cmds, opts, args, errors } = getopts({
  opts: [
    { name: '-l', argFilter: (v) => parseInt(v, 10) },
    { longName: '--verbose' },
  ],
  cmds: [{ name: 'up' }, { name: 'down' }],
});

if (errors.length) {
  const errorMessages = errors
    .map(({ name, message }) => `${name}: ${message}`)
    .join('\n');

  console.error(errorMessages);
} else {
  const limit = opts.has('-l') ? opts.get('-l')[0] : Infinity;
  const verbose = opts.has('--verbose');

  switch (cmds[0]) {
    case 'up':
      // Up...
      break;
    case 'down':
      // Down...
      break;
  }
}
```
