const { getopts } = require('../../d/index');

const ALPHABET_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABET_UPPERCASE = ALPHABET_LOWERCASE.toUpperCase();
const DIGITS = '0123456789';
const VALID_OPT_NAMES = Array.from(
  ALPHABET_LOWERCASE + ALPHABET_UPPERCASE + DIGITS,
  (i) => `-${i}`,
);
const INVALID_OPT_NAMES = [
  'a',
  'A',
  '1',
  '--a',
  '--A',
  '--1',
  '-a ',
  '- a',
  '_a',
  '~',
  '-~',
];
const VALID_LONG_OPT_NAMES = Array.from(
  ALPHABET_LOWERCASE + ALPHABET_UPPERCASE + DIGITS,
  (i) => `--${i}${Math.floor(Math.random() * 10) > 5 ? `-${i}` : ''}`,
);
const INVALID_LONG_OPT_NAMES = [
  'a',
  'A',
  '1',
  '-a',
  '-A',
  '-1',
  '--a ',
  '__a',
  '-- a',
  '~',
  '--~',
  '--a--a',
];

describe('[SCHEMA] valid option names', () => {
  VALID_OPT_NAMES.forEach((name) => {
    test(`"${name}" is a valid name for an option`, () => {
      // Defined as a regular option.
      expect(() => getopts({ opts: [{ name }] })).not.toThrowError();

      // Defined as an option under a command.
      expect(() =>
        getopts({ cmds: [{ name: 'up', opts: [{ name }] }] }),
      ).not.toThrowError();
    });
  });

  INVALID_OPT_NAMES.forEach((name) => {
    test(`"${name}" is not a valid name for an option`, () => {
      // Defined as a regular option.
      expect(() => getopts({ opts: [{ name }] })).toThrowError();

      // Defined as an option under a command.
      expect(() =>
        getopts({ cmds: [{ name: 'up', opts: [{ name }] }] }),
      ).toThrowError();
    });
  });

  test('valid long option names', () => {
    VALID_LONG_OPT_NAMES.forEach((longName) => {
      // Defined as a regular long option.
      expect(() => getopts({ opts: [{ longName }] })).not.toThrowError();

      // Defined as a long option under a command.
      expect(() =>
        getopts({ cmds: [{ name: 'up', opts: [{ longName }] }] }),
      ).not.toThrowError();
    });
  });

  test('invalid long option names', () => {
    // Defined as a regular long option.
    INVALID_LONG_OPT_NAMES.forEach((longName) => {
      expect(() => getopts({ opts: [{ longName }] })).toThrowError();
    });

    // Defined as a long option under a command.
    INVALID_LONG_OPT_NAMES.forEach((longName) => {
      expect(() =>
        getopts({ cmds: [{ name: 'up', opts: [{ longName }] }] }),
      ).toThrowError();
    });
  });
});
