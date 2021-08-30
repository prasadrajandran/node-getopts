const { getopts } = require('../../dist/index');
const getRandomInt = require('../helpers/get_random_int');
const { VALID_CHARS } = require('./cmd_names.test');

const VALID_OPT_NAMES = VALID_CHARS.map((c) => `-${c}`);

const VALID_LONG_OPT_NAMES = VALID_CHARS.map((c) => `--${c}`).concat(
  VALID_CHARS.map((c) => {
    const char = `--${c}`;
    const randChar = () => VALID_CHARS[getRandomInt(0, VALID_CHARS.length)];

    switch (getRandomInt(0, 3)) {
      case 0:
        return `${char}${randChar().toLowerCase()}`;
      case 1:
        return `${char}${randChar().toLowerCase()}${randChar().toUpperCase()}`;
      default:
        return `${char}-${randChar()}`;
    }
  }),
);

const INVALID_OPT_NAMES = [
  '',
  'a',
  'A',
  '1',
  '-$',
  'a-',
  '-a ',
  ' -a',
  '- a',
  '_a',
  '-a--a',
  '~',
  '-~',
  '--$',
  '--a-',
  '--a ',
  ' --a',
  '-- a',
  '__a',
  '--~',
  '--a--a',
];

describe('[SCHEMA] option names', () => {
  VALID_OPT_NAMES.concat(VALID_LONG_OPT_NAMES).forEach((name) => {
    test(`"${name}" is a valid name for an option`, () => {
      // Defined as a regular option.
      expect(() => getopts({ opts: [{ name }] })).not.toThrowError();
      expect(() => getopts({ opts: [{ name: [name] }] })).not.toThrowError();

      // Defined as an option under a command.
      expect(() =>
        getopts({ cmds: [{ name: 'up', opts: [{ name }] }] }),
      ).not.toThrowError();
      expect(() =>
        getopts({ cmds: [{ name: 'up', opts: [{ name: [name] }] }] }),
      ).not.toThrowError();
    });
  });

  INVALID_OPT_NAMES.forEach((name) => {
    test(`"${name}" is not a valid name for a short or long option`, () => {
      // Defined as a regular option.
      expect(() => getopts({ opts: [{ name }] })).toThrowError();
      expect(() => getopts({ opts: [{ name: [name] }] })).toThrowError();

      // Defined as an option under a command.
      expect(() =>
        getopts({ cmds: [{ name: 'up', opts: [{ name }] }] }),
      ).toThrowError();
      expect(() =>
        getopts({ cmds: [{ name: 'up', opts: [{ name: [name] }] }] }),
      ).toThrowError();
    });
  });
});
