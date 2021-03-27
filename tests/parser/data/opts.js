const {
  OptMissingArgError,
  UnknownOptError,
  DuplicateOptError,
  OptArgFilterError,
} = require('../../../dist/classes/errors');

const schemaWithCmd = {
  opts: [
    { name: '-a' },
    { name: '-b' },
    { name: '-c', longName: '--c', arg: 'optional' },
    { name: '-d', arg: 'required' },
    {
      name: '-e',
      arg: 'required',
      argFilter: (v) => {
        const num = Number(v);
        if (!Number.isFinite(num)) {
          throw new Error(`${v} is not a finite number`);
        }
        return num;
      },
    },
  ],
  cmds: [{ name: 'up' }],
  minArgs: 0,
};

const opts = new Map();

opts.set(`[opts] "--" operator`, [
  {
    schema: schemaWithCmd,
    argv: '-- up arg1 -- -abcd',
    cmdValues: ['up'],
    argValues: ['arg1', '--', '-abcd'],
  },
  {
    schema: schemaWithCmd,
    argv: 'up arg1 - -abc',
    cmdValues: ['up'],
    optNames: ['-a', '-b', '-c'],
    optValues: [undefined, undefined, undefined],
    argValues: ['arg1', '-'],
  },
  {
    schema: schemaWithCmd,
    argv: 'up arg1 -- -abcd',
    cmdValues: ['up'],
    argValues: ['arg1', '-abcd'],
  },
  {
    schema: schemaWithCmd,
    argv: 'up arg1 -- -- -- -abcd --',
    cmdValues: ['up'],
    argValues: ['arg1', '--', '--', '-abcd', '--'],
  },
  {
    schema: schemaWithCmd,
    argv: '-ab up -cd500 arg1 -- -abcd',
    cmdValues: ['up'],
    argValues: ['arg1', '-abcd'],
    optNames: ['-a', '-b', '-c', '-d'],
    optValues: [undefined, undefined, undefined, '500'],
  },
]);

opts.set(`[opts] order of options and option arguments`, [
  {
    schema: schemaWithCmd,
    argv: '-e 500',
    optNames: ['-e'],
    optArgs: [500],
  },
  {
    schema: schemaWithCmd,
    argv: '-a up something -b -c like this',
    cmdValues: ['up'],
    argValues: ['something', 'like', 'this'],
    optNames: ['-a', '-b', '-c'],
    optArgs: [undefined, undefined, undefined],
  },
  {
    schema: schemaWithCmd,
    argv: 'up arg1 arg2 -a -b 7000 -c -d 500',
    cmdValues: ['up'],
    argValues: ['arg1', 'arg2', '7000'],
    optNames: ['-a', '-b', '-c', '-d'],
    optArgs: [undefined, undefined, undefined, '500'],
  },
  {
    schema: schemaWithCmd,
    argv: '-a -b -c -d500',
    optNames: ['-a', '-b', '-c', '-d'],
    optArgs: [undefined, undefined, undefined, '500'],
  },
  {
    schema: schemaWithCmd,
    argv: '-abcd500',
    optNames: ['-a', '-b', '-c', '-d'],
    optArgs: [undefined, undefined, undefined, '500'],
  },
  {
    schema: schemaWithCmd,
    argv: '-abcd 500',
    optNames: ['-a', '-b', '-c', '-d'],
    optArgs: [undefined, undefined, undefined, '500'],
  },
  {
    schema: schemaWithCmd,
    argv: '-abdc',
    optNames: ['-a', '-b', '-d'],
    optArgs: [undefined, undefined, 'c'],
  },
  {
    schema: schemaWithCmd,
    argv: '-abd-c',
    optNames: ['-a', '-b', '-d'],
    optArgs: [undefined, undefined, '-c'],
  },
  {
    schema: schemaWithCmd,
    argv: '-abd -c',
    optNames: ['-a', '-b', '-d'],
    optArgs: [undefined, undefined, '-c'],
  },
  {
    schema: schemaWithCmd,
    argv: '-abd--c',
    optNames: ['-a', '-b', '-d'],
    optArgs: [undefined, undefined, '--c'],
  },
  {
    schema: schemaWithCmd,
    argv: '-abd --c',
    optNames: ['-a', '-b', '-d'],
    optArgs: [undefined, undefined, '--c'],
  },
  {
    schema: schemaWithCmd,
    argv: '-abd--',
    optNames: ['-a', '-b', '-d'],
    optArgs: [undefined, undefined, '--'],
  },
  {
    schema: schemaWithCmd,
    argv: '-abd --',
    optNames: ['-a', '-b', '-d'],
    optArgs: [undefined, undefined, '--'],
  },
]);

opts.set(`[opts] errors`, [
  {
    schema: schemaWithCmd,
    argv: '-abcx',
    optNames: ['-a', '-b', '-c'],
    optArgs: [undefined, undefined, undefined],
    errorClasses: [UnknownOptError],
  },
  {
    schema: schemaWithCmd,
    argv: '-abc -x',
    optNames: ['-a', '-b', '-c'],
    optArgs: [undefined, undefined, undefined],
    errorClasses: [UnknownOptError],
  },
  {
    schema: schemaWithCmd,
    argv: '-x up -abc',
    optNames: ['-a', '-b', '-c'],
    optArgs: [undefined, undefined, undefined],
    errorClasses: [UnknownOptError],
  },
  {
    schema: schemaWithCmd,
    argv: '-abcd',
    optNames: ['-a', '-b', '-c', '-d'],
    optArgs: [undefined, undefined, undefined, undefined],
    errorClasses: [OptMissingArgError],
  },
  {
    schema: schemaWithCmd,
    argv: '-abc -d',
    optNames: ['-a', '-b', '-c', '-d'],
    optArgs: [undefined, undefined, undefined, undefined],
    errorClasses: [OptMissingArgError],
  },
  {
    schema: schemaWithCmd,
    argv: '-abc up -d',
    optNames: ['-a', '-b', '-c', '-d'],
    optArgs: [undefined, undefined, undefined, undefined],
    errorClasses: [OptMissingArgError],
  },
  {
    schema: schemaWithCmd,
    argv: '-abcesomething',
    optNames: ['-a', '-b', '-c', '-e'],
    optArgs: [undefined, undefined, undefined, undefined],
    errorClasses: [OptArgFilterError],
  },
  {
    schema: schemaWithCmd,
    argv: '-abce something',
    optNames: ['-a', '-b', '-c', '-e'],
    optArgs: [undefined, undefined, undefined, undefined],
    errorClasses: [OptArgFilterError],
  },
  {
    schema: schemaWithCmd,
    argv: '-abc -esomething',
    optNames: ['-a', '-b', '-c', '-e'],
    optArgs: [undefined, undefined, undefined, undefined],
    errorClasses: [OptArgFilterError],
  },
  {
    schema: schemaWithCmd,
    argv: '-b -b',
    optNames: ['-b'],
    optArgs: [undefined],
    errorClasses: [DuplicateOptError],
  },
  {
    schema: schemaWithCmd,
    argv: '-bbbb',
    optNames: ['-b'],
    optArgs: [undefined],
    errorClasses: [DuplicateOptError],
  },
  {
    schema: schemaWithCmd,
    argv: '-b up -a -b',
    optNames: ['-b', '-a'],
    optArgs: [undefined, undefined],
    errorClasses: [DuplicateOptError],
  },
  {
    schema: schemaWithCmd,
    argv: '-b -a -d 100 -a up arg1 -a arg2 -a -a -b -b',
    cmdValues: ['up'],
    argValues: ['arg1', 'arg2'],
    optNames: ['-b', '-a', '-d'],
    optArgs: [undefined, undefined, '100'],
    errorClasses: [DuplicateOptError, DuplicateOptError],
  },
  {
    schema: schemaWithCmd,
    argv: '-b -a -a up arg1 -c -a -a -a -b -b -c',
    cmdValues: ['up'],
    argValues: ['arg1'],
    optNames: ['-b', '-a', '-c'],
    optArgs: [undefined, undefined, undefined],
    errorClasses: [DuplicateOptError, DuplicateOptError, DuplicateOptError],
  },
  {
    schema: schemaWithCmd,
    argv: '-x up arg1 arg2 -bbb -a -e evalue -d',
    cmdValues: ['up'],
    argValues: ['arg1', 'arg2'],
    optNames: ['-b', '-a', '-e', '-d'],
    optArgs: [undefined, undefined, undefined, undefined],
    errorClasses: [
      UnknownOptError,
      DuplicateOptError,
      OptArgFilterError,
      OptMissingArgError,
    ],
  },
]);

module.exports = opts;
