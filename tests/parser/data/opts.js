const {
  OptMissingArgError,
  UnknownOptError,
  DuplicateOptError,
} = require('../../../dist/classes/errors');

const schemaWithCmd = {
  opts: [
    { name: '-a' },
    { name: '-b' },
    { name: '-c', longName: '--c', arg: 'optional' },
    { name: '-d', arg: 'required' },
  ],
  cmds: [{ name: 'up' }],
  minArgs: 0,
};

const opts = new Map();

opts.set(`[opts]`, [
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
    argv: '-ab up arg1 -- -abcd',
    cmdValues: ['up'],
    argValues: ['arg1', '-abcd'],
    optNames: ['-a', '-b'],
    optValues: [undefined, undefined],
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
  {
    schema: schemaWithCmd,
    argv: '-abcd',
    optNames: ['-a', '-b', '-c', '-d'],
    optArgs: [undefined, undefined, undefined, undefined],
    errorClasses: [OptMissingArgError],
  },
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
    argv: '-b -a -d 100 -a up arg1 -a arg2 -a -a -b -b',
    cmdValues: ['up'],
    argValues: ['arg1', 'arg2'],
    optNames: ['-b', '-a', '-d'],
    optArgs: [undefined, undefined, '100'],
    errorClasses: [DuplicateOptError, DuplicateOptError],
  },
]);

module.exports = opts;
