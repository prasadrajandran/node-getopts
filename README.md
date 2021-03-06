# getopts

Build CLI utilities effortlessly.

## Highlights

- Adheres POSIX/GNU conventions
  - [POSIX guidelines](https://github.com/prasadrajandran/node-getopts/blob/development/resources/posix_utility_syntax_guidelines.md)
  - [GNU guidelines (for long options)](https://github.com/prasadrajandran/node-getopts/blob/development/resources/gnu_program_argument_syntax.md)
- Strict input validation
  - Errors are collected into an array
- Subcommand support (with infinite nesting)
  - Subcommands support their own set of options and arguments
- Argument and option argument filters
  - Argument validation
  - Type casting
  - etc.
- Built-in TypeScript type declarations

## How Do I Use It?

Full API documentation can be found [here](https://github.com/prasadrajandran/node-getopts/tree/main/docs).

The most relevant parts are:

- [getopts()](https://github.com/prasadrajandran/node-getopts/blob/main/docs/modules/parse.md) (internally known as `parse()`)
  - [GetOptsSchema](https://github.com/prasadrajandran/node-getopts/blob/main/docs/interfaces/interfaces_schema.schema.md) (#1 argument)
  - [GetOptsSettings](https://github.com/prasadrajandran/node-getopts/blob/main/docs/interfaces/interfaces_settings.settings.md) (#2 argument which is optional)
- [ParsedArgs](https://github.com/prasadrajandran/node-getopts/blob/main/docs/interfaces/interfaces_parsed_args.parsedargs.md) - what `getopts()` returns.

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
import {
  getopts,
  Schema,
  CmdSchema,
  OptSchema,
  Settings,
} from '@prasadrajandran/getopts';
```

TypeScript interfaces can be used too.

### Examples

#### 1. Parsing Options/Arguments, Using Filters, and Checking for Errors

```JavaScript
const { opts, args, errors } = getopts({
  opts: [
    { name: '-l', longName: '--limit', argFilter: (arg) => parseInt(arg) },
    { longName: '--version' },
    { longName: '--help' },
  ],
  minArgs: 1,
  maxArgs: 1,
  argFilter: (arg) => {
    const filename = path.resolve(arg);
    if (!fs.lstatSync(filename).isFile()) {
      throw new Error(`${filename} is not a file`);
    }
    return filename;
  },
});

if (opts.has('--help')) {
  printHelp();
} else if (opts.has('--version')) {
  printVersion();
} else if (errors.length) {
  errors.forEach(({ name, message }) => {
    console.error(`[${name}] ${message}`);
  });
  printHelp();
} else {
  const limit = opts.get('-l') || opts.get('--limit') || Infinity;
  const filename = args[0];
  // Run utility...
}
```

#### 2. Parsing Commands

```JavaScript
const { cmds, opts, errors } = getopts({
  cmds: [
    {
      name: 'up',
      opts: [
        { name: '-v', longName: '--verbose' },
      ],
      maxArgs: 0,
    },
    {
      name: 'down',
      maxArgs: 0,
    },
  ],
  opts: [
    { longName: '--version' },
    { longName: '--help' },
  ],
  // Expects one argument so that means that the command is required. If set to
  // 0, the command would be optional.
  minArgs: 1,
});

const cmd = cmds[0];

switch (cmd) {
  case 'up':
    const verbose = opts.has('-v') || opts.has('--verbose');
    // up...
    break;
  case 'down':
    // down...
    break;
}
```
