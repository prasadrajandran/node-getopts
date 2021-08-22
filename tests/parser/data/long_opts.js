const {
  OptMissingArgError,
  UnknownOptError,
  DuplicateOptError,
  UnexpectedOptArgError,
  OptArgFilterError,
  DuplicateAliasOptError,
} = require('../../../dist/classes/errors');

const schemaWithCmd = {
  opts: [
    { name: ['-a', '--a'] },
    { name: ['--b', '-b'] },
    {
      name: '--c',
      arg: {
        required: false,
        filter: (v) => {
          const num = Number(v);
          if (!Number.isFinite(num)) {
            throw new Error(`${v} is not a finite number`);
          }
          return num;
        },
      },
    },
    { name: '--d', arg: { required: true } },
    { name: '--e', arg: { required: false, multiple: true } },
    { name: '--f', arg: { required: true, multiple: true } },
  ],
  cmds: [{ name: 'up' }],
  args: {
    min: 0,
  },
};

const schemaWithTwoCmds = {
  opts: [{ name: '--verbose' }],
  cmds: [
    {
      name: 'read',
      opts: [{ name: '--fast' }],
    },
    {
      name: 'list',
      opts: [{ name: '--group' }],
    },
  ],
  args: {
    min: 1,
  },
};

const longOpts = new Map();

longOpts.set(`[long opts] "--" operator`, [
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
    optArgs: [undefined, undefined, undefined],
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
    optArgs: [undefined, undefined],
  },
]);

longOpts.set(`[long opts] order of options and option arguments`, [
  {
    schema: schemaWithCmd,
    argv: '--a up something --b --c like this',
    cmdValues: ['up'],
    argValues: ['something', 'like', 'this'],
    optNames: ['--a', '--b', '--c'],
    optArgs: [undefined, undefined, undefined],
  },
  {
    // Does not expect an argument and "=" without an argument is fine.
    schema: schemaWithCmd,
    argv: '--a=',
    optNames: ['--a'],
    optArgs: [undefined],
  },
  {
    schema: schemaWithCmd,
    argv: '--c=',
    optNames: ['--c'],
    optArgs: [undefined],
  },
  {
    schema: schemaWithCmd,
    argv: '--c= --d=400',
    optNames: ['--c', '--d'],
    optArgs: [undefined, '400'],
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
    argv: 'up arg1 arg2 --a --e=50',
    cmdValues: ['up'],
    argValues: ['arg1', 'arg2'],
    optNames: ['--a', '--e'],
    optArgs: [undefined, ['50']],
  },
  {
    schema: schemaWithCmd,
    argv: 'up --a --e',
    cmdValues: ['up'],
    optNames: ['--a', '--e'],
    optArgs: [undefined, []],
  },
  {
    schema: schemaWithCmd,
    argv: '--e up --e --a --e --e',
    cmdValues: ['up'],
    optNames: ['--e', '--a'],
    optArgs: [[], undefined],
  },
  {
    schema: schemaWithCmd,
    argv: 'up arg1 arg2 --a --e=50 --e=50',
    cmdValues: ['up'],
    argValues: ['arg1', 'arg2'],
    optNames: ['--a', '--e'],
    optArgs: [undefined, ['50', '50']],
  },
  {
    schema: schemaWithCmd,
    argv: 'up arg1 arg2 --e= --a --e=50',
    cmdValues: ['up'],
    argValues: ['arg1', 'arg2'],
    optNames: ['--e', '--a'],
    optArgs: [['50'], undefined],
  },
]);

longOpts.set(`[long opts] errors`, [
  {
    schema: schemaWithCmd,
    argv: '--y --a',
    optNames: ['--a'],
    optArgs: [undefined],
    errorClasses: [UnknownOptError],
  },
  {
    schema: schemaWithCmd,
    argv: '--y up --a',
    cmdValues: ['up'],
    optNames: ['--a'],
    optArgs: [undefined],
    errorClasses: [UnknownOptError],
  },
  {
    schema: schemaWithCmd,
    argv: '--c --a --d',
    optNames: ['--c', '--a', '--d'],
    optArgs: [undefined, undefined, undefined],
    errorClasses: [OptMissingArgError],
  },
  {
    schema: schemaWithCmd,
    argv: '--c --a up arg1 --d= arg2',
    cmdValues: ['up'],
    argValues: ['arg1', 'arg2'],
    optNames: ['--c', '--a', '--d'],
    optArgs: [undefined, undefined, undefined],
    errorClasses: [OptMissingArgError],
  },
  {
    schema: schemaWithCmd,
    argv: 'up arg1 --d=5 --f',
    cmdValues: ['up'],
    argValues: ['arg1'],
    optNames: ['--d', '--f'],
    optArgs: ['5', []],
    errorClasses: [OptMissingArgError],
  },
  {
    schema: schemaWithCmd,
    argv: '--c up --a=5 arg1',
    cmdValues: ['up'],
    argValues: ['arg1'],
    optNames: ['--c', '--a'],
    optArgs: [undefined, undefined],
    errorClasses: [UnexpectedOptArgError],
  },
  {
    schema: schemaWithCmd,
    argv: '--c=something up',
    cmdValues: ['up'],
    optNames: ['--c'],
    optArgs: [undefined],
    errorClasses: [OptArgFilterError],
  },
  {
    schema: schemaWithCmd,
    argv: '--a --c up --a',
    cmdValues: ['up'],
    optNames: ['--a', '--c'],
    optArgs: [undefined, undefined],
    errorClasses: [DuplicateOptError],
  },
  {
    schema: schemaWithCmd,
    argv: '--a --c up --b --a arg1 --b',
    cmdValues: ['up'],
    argValues: ['arg1'],
    optNames: ['--a', '--c', '--b'],
    optArgs: [undefined, undefined, undefined],
    errorClasses: [DuplicateOptError, DuplicateOptError],
  },
  {
    schema: schemaWithCmd,
    argv: '--a --c up arg1 -a',
    cmdValues: ['up'],
    argValues: ['arg1'],
    optNames: ['--a', '--c', '-a'],
    optArgs: [undefined, undefined, undefined],
    errorClasses: [DuplicateAliasOptError],
  },
  {
    schema: schemaWithCmd,
    argv: '--a --c up -a arg1 -a',
    cmdValues: ['up'],
    argValues: ['arg1'],
    optNames: ['--a', '--c', '-a'],
    optArgs: [undefined, undefined, undefined],
    errorClasses: [DuplicateAliasOptError, DuplicateOptError],
  },
  {
    schema: schemaWithCmd,
    argv: '--x --a up arg1 --d --b=5 --c=something --a -b',
    cmdValues: ['up'],
    argValues: ['arg1'],
    optNames: ['--a', '--d', '--b', '--c', '-b'],
    optArgs: [undefined, undefined, undefined, undefined, undefined],
    errorClasses: [
      UnknownOptError,
      OptMissingArgError,
      UnexpectedOptArgError,
      OptArgFilterError,
      DuplicateOptError,
      DuplicateAliasOptError,
    ],
  },

  // Schema with two commands
  {
    schema: schemaWithTwoCmds,
    argv: '--verbose read --group arg1',
    cmdValues: ['read'],
    argValues: ['arg1'],
    optNames: ['--verbose'],
    optArgs: [undefined],
    errorClasses: [UnknownOptError],
  },
  {
    schema: schemaWithTwoCmds,
    argv: '--verbose list arg1 --fast',
    cmdValues: ['list'],
    argValues: ['arg1'],
    optNames: ['--verbose'],
    optArgs: [undefined],
    errorClasses: [UnknownOptError],
  },
]);

module.exports = longOpts;
