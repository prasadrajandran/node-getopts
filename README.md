# getopts

Utility that parses command line arguments for you. The CLI of your utility is
expected to adhere to the POSIX/GNU conventions. A copy of the POSIX guidelines
can be found [here](https://github.com/prasadrajandran/node-getopts/blob/development/resources/posix_utility_syntax_guidelines.md)
and a copy of the GNU guidelines can be found [here](https://github.com/prasadrajandran/node-getopts/blob/development/resources/gnu_program_argument_syntax.md).

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

```Shell
npm i @prasadrajandran/getopts
```

```JavaScript
const { getopts } = require('@prasadrajandran/getopts');
```

### Example

```JavaScript
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
  const limit = opts.get('-l') || Infinity;
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
