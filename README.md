# getopts

Utility program that parses command line arguments for you. The CLI of your
program is expected to adhere to the POSIX/GNU conventions. The POSIX/GNU
conventions can be found [here](https://www.gnu.org/software/libc/manual/html_node/Argument-Syntax.html).

## How Do I Use It?

Full API documentation can be found [here](https://github.com/prasadrajandran/node-getopts/tree/main/docs).

### Installation

```
npm install @prasadrajandran/getopts --save
```

### Example

```javascript
const { getopts } = require('@prasadrajandran/getopts');

const { config, execPath, module, input, cmds, opts, args, errors } = getopts({
  opts: [
    { name: '-l', argFilter: (v) => parseInt(v, 10) },
    { longName: '--verbose' },
  ],
  cmds: [{ name: 'up' }, { name: 'down' }],
});

if (errors.length) {
  console.error(errors.map(({ msg }) => msg).join('\n'));
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
