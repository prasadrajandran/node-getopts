const {
  OptMissingArgError,
  UnknownOptError,
  DuplicateOptError,
} = require('../../../dist/classes/errors');

const schemaWithCmd = {
  opts: [
    { name: '-a', longName: '--a' },
    { name: '-b', longName: '--b' },
    { longName: '--c', arg: 'optional' },
    { longName: '--d', arg: 'required' },
  ],
  cmds: [{ name: 'up' }],
  minArgs: 0,
};

const longOpts = new Map();

longOpts.set(`[long opts]`, [
  {
    schema: schemaWithCmd,
    argv: '-- up arg1 -- --a--b--c--d',
    cmdValues: ['up'],
    argValues: ['arg1', '--', '--a--b--c--d'],
  },
  {
    schema: schemaWithCmd,
    argv: 'up arg1 - --a --b --c',
    cmdValues: ['up'],
    optNames: ['--a', '--b', '--c'],
    optValues: [undefined, undefined, undefined],
    argValues: ['arg1', '-'],
  },
  {
    schema: schemaWithCmd,
    argv: 'up arg1 -- --a --b --c --d',
    cmdValues: ['up'],
    argValues: ['arg1', '--a', '--b', '--c', '--d'],
  },
  {
    schema: schemaWithCmd,
    argv: '--a --b up arg1 -- --a --b --c --d',
    cmdValues: ['up'],
    argValues: ['arg1', '--a', '--b', '--c', '--d'],
    optNames: ['--a', '--b'],
    optValues: [undefined, undefined],
  },
  {
    schema: schemaWithCmd,
    argv: '--a up something --b --c like this',
    cmdValues: ['up'],
    argValues: ['something', 'like', 'this'],
    optNames: ['--a', '--b', '--c'],
    optArgs: [undefined, undefined, undefined],
  },
  {
    schema: schemaWithCmd,
    argv: 'up arg1 arg2 --a --b 7000 --c --d=500',
    cmdValues: ['up'],
    argValues: ['arg1', 'arg2', '7000'],
    optNames: ['--a', '--b', '--c', '--d'],
    optArgs: [undefined, undefined, undefined, '500'],
  },
  {
    schema: schemaWithCmd,
    argv: 'up arg1 arg2 --a --b 7000 --c --d=',
    cmdValues: ['up'],
    argValues: ['arg1', 'arg2', '7000'],
    optNames: ['--a', '--b', '--c', '--d'],
    optArgs: [undefined, undefined, undefined, undefined],
    errorClasses: [OptMissingArgError],
  },
  {
    schema: schemaWithCmd,
    argv: 'up arg1 arg2 --a --b 7000 --c --d',
    cmdValues: ['up'],
    argValues: ['arg1', 'arg2', '7000'],
    optNames: ['--a', '--b', '--c', '--d'],
    optArgs: [undefined, undefined, undefined, undefined],
    errorClasses: [OptMissingArgError],
  },
  {
    schema: schemaWithCmd,
    argv: '--d=500 --a --c up arg1 --a arg2 --b --a --b --b --b 7000 --b',
    optNames: ['--d', '--a', '--c', '--b'],
    argValues: ['arg1', 'arg2', '7000'],
    errorClasses: [DuplicateOptError, DuplicateOptError],
    optArgs: ['500', undefined, undefined, undefined],
  },
  {
    schema: schemaWithCmd,
    argv:
      '--a --x up --d=5 --c --x arg1 --c arg2 --x --x arg3 --y --b --d=10 --y',
    optNames: ['--a', '--d', '--c', '--b'],
    argValues: ['arg1', 'arg2', 'arg3'],
    errorClasses: [
      UnknownOptError,
      DuplicateOptError,
      UnknownOptError,
      DuplicateOptError,
    ],
    optArgs: [undefined, '10', undefined, undefined],
  },
]);

module.exports = longOpts;
