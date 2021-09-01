const { OptMap } = require('../dist/classes/opt_map');

describe('OptMap', () => {
  const optMap = new OptMap([
    ['-a', undefined],
    ['-n', 5],
    ['--num', 5],
  ]);

  test('inherits from Map', () => {
    expect(optMap instanceof Map).toBe(true);
  });

  describe('get()', () => {
    test('accepts a single option name', () => {
      expect(optMap.get('-a')).toBeUndefined();
      expect(optMap.get('-n')).toBe(5);
    });

    test('accepts an array of option names', () => {
      expect(optMap.get(['-x', '--b'])).toBeUndefined();
      expect(optMap.get(['-x', '--num'])).toBe(5);
    });

    test('returns the default value if option name does not exist', () => {
      expect(optMap.get('-x', 1)).toBe(1);
      expect(optMap.get(['-x', '--b'], 2)).toBe(2);
    });
  });

  describe('has()', () => {
    test('accepts a single option name', () => {
      expect(optMap.has('-b')).toBe(false);
      expect(optMap.has('-n')).toBe(true);
    });

    test('accepts an array of option names', () => {
      expect(optMap.has(['-b', '-x'])).toBe(false);
      expect(optMap.has(['-b', '-x', '-n', '-y'])).toBe(true);
    });
  });
});
