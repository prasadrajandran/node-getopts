const {
  UnknownCmdError,
  CmdExpectedError,
  ArgFilterError,
  ExcessArgsError,
  InsufficientArgsError,
} = require('../../../dist/classes/parser_errors');

const schema = {
  cmds: [
    {
      name: 'up',
      args: {
        filter: (v) => {
          const num = Number(v);
          if (!Number.isFinite(num)) {
            throw new Error(`${v} is not a finite number`);
          }
          return num;
        },
        min: 2,
        max: 5,
      },
    },
  ],
};

const schemaWithCmdAliases = {
  cmds: [{ ...schema.cmds[0], name: ['up', 'above'] }],
};

const cmds = new Map();

cmds.set(`[cmds] aliases`, [
  {
    schema: schemaWithCmdAliases,
    argv: 'up 200 500',
    cmdValues: ['up'],
    argValues: [200, 500],
  },
  {
    schema: schemaWithCmdAliases,
    argv: 'above 200 500',
    cmdValues: ['above'],
    argValues: [200, 500],
  },
]);

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
    // Command's alias is considered an argument
    schema,
    argv: 'up above',
    cmdValues: ['up'],
    argValues: [],
    errorClasses: [ArgFilterError, InsufficientArgsError],
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
