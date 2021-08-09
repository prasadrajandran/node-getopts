const {
  UnknownCmdError,
  CmdExpectedError,
  ArgFilterError,
  ExcessArgsError,
  InsufficientArgsError,
} = require('../../../d/classes/errors');

const schema = {
  cmds: [
    {
      name: 'up',
      argFilter: (v) => {
        const num = Number(v);
        if (!Number.isFinite(num)) {
          throw new Error(`${v} is not a finite number`);
        }
        return num;
      },
      minArgs: 2,
      maxArgs: 5,
    },
  ],
};

const cmds = new Map();

cmds.set(`[cmds] errors`, [
  {
    schema,
    argv: '',
    errorClasses: [CmdExpectedError],
  },
  {
    schema,
    argv: 'down',
    errorClasses: [UnknownCmdError],
  },
  {
    schema,
    argv: 'up 500 something',
    cmdValues: ['up'],
    argValues: [500],
    errorClasses: [ArgFilterError],
  },
  {
    schema,
    argv: 'up 500 501 502 503 504 505',
    cmdValues: ['up'],
    argValues: [500, 501, 502, 503, 504],
    errorClasses: [ExcessArgsError],
  },
  {
    schema,
    argv: 'up 500',
    cmdValues: ['up'],
    argValues: [500],
    errorClasses: [InsufficientArgsError],
  },
]);

module.exports = cmds;
