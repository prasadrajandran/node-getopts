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
    argv: '--a --b --c --d500',
    optNames: ['--a', '--b', '--c'],
    errorClasses: [UnknownOptError],
    optArgs: [undefined, undefined, undefined],
  },
]);

module.exports = longOpts;
