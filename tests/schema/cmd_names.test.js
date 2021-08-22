const { getopts } = require('../../dist/index');
const getRandomInt = require('../helpers/get_random_int');

const ALPHABET_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABET_UPPERCASE = ALPHABET_LOWERCASE.toUpperCase();
const DIGITS = '0123456789';
const VALID_CHARS = Array.from(
  ALPHABET_LOWERCASE + ALPHABET_UPPERCASE + DIGITS,
);

const VALID_CMD_NAMES = VALID_CHARS.concat(
  VALID_CHARS.map((c) => {
    const randChar = () => VALID_CHARS[getRandomInt(0, VALID_CHARS.length)];

    switch (getRandomInt(0, 3)) {
      case 0:
        return `${c}${randChar().toLowerCase()}${randChar().toUpperCase()}`;
      case 1:
        return `${c}-${randChar()}`;
      default:
        return `${c.toUpperCase()}${randChar()}-`;
    }
  }),
);

const INVALID_CMD_NAMES = [
  '',
  '-',
  '-a',
  '--a',
  '-1',
  '--1',
  '$a',
  'a@',
  'up down',
];

describe('[SCHEMA] command names', () => {
  VALID_CMD_NAMES.forEach((name) => {
    test(`"${name}" is a valid name for a command`, () => {
      expect(() => getopts({ cmds: [{ name }] })).not.toThrowError();
      expect(() => getopts({ cmds: [{ name: [name] }] })).not.toThrowError();
    });
  });

  INVALID_CMD_NAMES.forEach((name) => {
    test(`"${name}" is not a valid name for a command`, () => {
      expect(() => getopts({ cmds: [{ name }] })).toThrowError();
      expect(() => getopts({ cmds: [{ name: [name] }] })).toThrowError();
    });
  });
});

module.exports.VALID_CHARS = VALID_CHARS;
