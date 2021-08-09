const {
  ArgFilterError,
  ExcessArgsError,
  InsufficientArgsError,
} = require('../../../d/classes/errors');

const schema = {
  argFilter: (v) => {
    const num = Number(v);
    if (!Number.isFinite(num)) {
      throw new Error(`${v} is not a finite number`);
    }
    return num;
  },
  minArgs: 2,
  maxArgs: 5,
};

const args = new Map();

args.set(`[args] errors`, [
  {
    schema,
    argv: '500 something',
    argValues: [500],
    errorClasses: [ArgFilterError],
  },
  {
    schema,
    argv: '500 501 502 503 504 505',
    argValues: [500, 501, 502, 503, 504],
    errorClasses: [ExcessArgsError],
  },
  {
    schema,
    argv: '500',
    argValues: [500],
    errorClasses: [InsufficientArgsError],
  },
]);

module.exports = args;
