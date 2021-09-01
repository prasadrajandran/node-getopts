# getopts

Build CLI utilities effortlessly.

## Highlights

- Adheres POSIX/GNU conventions
  - [POSIX guidelines](https://github.com/prasadrajandran/node-getopts/blob/development/resources/posix_utility_syntax_guidelines.md)
  - [GNU guidelines (for long options)](https://github.com/prasadrajandran/node-getopts/blob/development/resources/gnu_program_argument_syntax.md)
- Strict input validation
  - Errors are collected into an array
- Subcommand support with infinite nesting
  - Subcommands support their own set of options and arguments
- Argument filters that allow for argument validation, type casting, etc.
- Option aliases
- Hooks to simplify handling the help option, version option, and parser errors.
- Built-in TypeScript type declarations

## How Do I Use It?

Full API documentation can be found [here](https://github.com/prasadrajandran/node-getopts/tree/main/docs).

The most relevant parts are:

- [getopts()](https://github.com/prasadrajandran/node-getopts/blob/main/docs/modules/parse.md) (internally known as `parse()`)
  - [Schema](https://github.com/prasadrajandran/node-getopts/blob/main/docs/interfaces/interfaces_schema.schema.md) (#1 argument)
  - [Config](https://github.com/prasadrajandran/node-getopts/blob/main/docs/interfaces/interfaces_config.Config.md) (#2 argument which is optional)
- [ParsedInput](https://github.com/prasadrajandran/node-getopts/blob/main/docs/interfaces/interfaces_parsed_input.ParsedInput.md) - what `getopts()` returns.

### Installation

```Shell
npm i @prasadrajandran/getopts
```

#### CommonJS

```JavaScript
const { getopts } = require('@prasadrajandran/getopts');
```

#### ES Modules

```JavaScript
import { getopts } from '@prasadrajandran/getopts';
```

See [this](https://nodejs.medium.com/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663)
for more info.

#### TypeScript

```TypeScript
import { getopts } from '@prasadrajandran/getopts';
import {
  Schema,
  CmdSchema,
  OptSchema,
} from '@prasadrajandran/getopts/dist/interfaces/schema';
import { Config } from '@prasadrajandran/getopts/dist/interfaces/config';
```

TypeScript interfaces can be used too.

### Examples

#### 1. Parsing Options/Arguments, Using Filters, and Checking for Errors

```JavaScript
const { opts, args, errors } = getopts({
  opts: [
    {
      name: ['-l', '--limit'],
      arg: { required: true, filter: (arg) => parseInt(arg) }
    },
    { name: '--version' },
    { name: '--help' },
  ],
  args: {
    min: 1,
    max: 1,
    filter: (arg) => {
      const filename = path.resolve(arg);
      if (!fs.lstatSync(filename).isFile()) {
        throw new Error(`${filename} is not a file`);
      }
      return filename;
    },
  },
});

// Note: This behaviour can be simplified by the use of hooks. Have a look at
// the CLI config documentation for more info.
if (opts.has('--help')) {
  printHelp();
  process.exit(0);
} else if (opts.has('--version')) {
  printVersion();
  process.exit(0);
} else if (errors.length) {
  errors.forEach(({ message }) => {
    console.error(`${packageName}: ${message}`);
  });
  printHelp();
  process.exit(1);
}

// Note: `opts` is an instance of `OptMap` (see API docs). So the line below
// could be rewritten like this:
// `const limit = opts.get(['-l', '--limit'], Infinity)`;
const limit = opts.get('-l') || opts.get('--limit') || Infinity;
const filename = args[0];
// Run utility...
```

#### 2. Parsing Commands

```JavaScript
const { cmds, opts, errors } = getopts({
  cmds: [
    {
      name: 'up',
      opts: [
        { name: ['-v', '--verbose'] },
      ],
      args: { max: 0 },
    },
    {
      name: 'down',
      args: { max: 0 },
    },
  ],
  opts: [
    { name: '--version' },
    { name: '--help' },
  ],
});

const cmd = cmds[0];

switch (cmd) {
  case 'up':
    // Note: `opts` is an instance of `OptMap` (see API docs) so `opts.has()`
    // can also accept an array of option names.
    const verbose = opts.has(['-v', '--verbose']);
    // up...
    break;
  case 'down':
    // down...
    break;
}
```
