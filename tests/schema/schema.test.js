const { parseSchema } = require('../../dist/parse_schema');

describe('schema', () => {
  test('defaults', () => {
    const schema = parseSchema({});

    expect(schema.opts).toBeInstanceOf(Map);
    expect(schema.opts).toHaveProperty('size', 0);
    expect(schema.cmds).toBeInstanceOf(Map);
    expect(schema.cmds).toHaveProperty('size', 0);
    expect(schema.minArgs).toBe(0);
    expect(schema.maxArgs).toBe(Infinity);
    expect(schema.argFilter).toBeInstanceOf(Function);
    expect(schema.expectsCmd).toBe(false);
    expect(Array.from(Object.keys(schema))).toStrictEqual([
      'opts',
      'cmds',
      'minArgs',
      'maxArgs',
      'argFilter',
      'expectsCmd',
    ]);
  });

  test('expects an argument', () => {
    expect(() => parseSchema()).toThrowError();
  });

  test('valid and invalid min/max values', () => {
    ['a', '1', -1, -Infinity, Infinity].forEach((min) => {
      expect(() => parseSchema({ args: { min } })).toThrowError();
    });

    ['a', '1', -1, -Infinity, Number.NEGATIVE_INFINITY].forEach((max) => {
      expect(() => parseSchema({ args: { max } })).toThrowError();
    });

    [0, Infinity, Number.POSITIVE_INFINITY].forEach((max) => {
      expect(() => parseSchema({ args: { max } })).not.toThrowError();
    });

    [[0, 0]].forEach(([min, max]) => {
      expect(() => parseSchema({ args: { min, max } })).not.toThrowError();
    });

    [[1, 0]].forEach(([min, max]) => {
      expect(() => parseSchema({ args: { min, max } })).toThrowError();
    });
  });

  test('min/max when cmds is defined', () => {
    const cmds = [{ name: 'up' }];

    [0, 1].forEach((min) => {
      expect(() => parseSchema({ cmds, args: { min } })).not.toThrowError();
    });

    [1].forEach((max) => {
      expect(() => parseSchema({ cmds, args: { max } })).not.toThrowError();
    });

    [-1, 2].forEach((min) => {
      expect(() => parseSchema({ cmds, args: { min } })).toThrowError();
    });

    [0, 2].forEach((max) => {
      expect(() => parseSchema({ cmds, args: { max } })).toThrowError();
    });
  });

  test('an argument filter must be a function', () => {
    expect(() =>
      parseSchema({ args: { filter: () => {} } }),
    ).not.toThrowError();
    expect(() => parseSchema({ args: { filter: 'a' } })).toThrowError();
  });

  test('an argument filter serves no purpose if arguments are not accepted', () => {
    expect(() =>
      parseSchema({ args: { max: 0, filter: () => {} } }),
    ).toThrowError();
  });

  test('an argument filter serves no purpose if commands are expected', () => {
    expect(() =>
      parseSchema({ cmds: [{ name: '-a' }], args: { filter: () => {} } }),
    ).toThrowError();
  });
});

describe('schema - opts', () => {
  test('option defaults', () => {
    ['-a', ['-a']].forEach((name) => {
      const schema = parseSchema({ opts: [{ name }] });

      expect(schema.opts.size).toBe(1);

      const aOptSchema = schema.opts.get('-a');

      expect(aOptSchema.argAccepted).toBe(false);
      expect(aOptSchema.argRequired).toBe(false);
      expect(aOptSchema.supportsMultipleArgs).toBe(false);
      expect(aOptSchema.optArgFilter).toBeInstanceOf(Function);
      expect(aOptSchema.parsedDuplicates).toBeInstanceOf(Set);
      expect(aOptSchema.parsedName).toBe(null);
      expect(Array.from(Object.keys(aOptSchema))).toStrictEqual([
        'argAccepted',
        'argRequired',
        'supportsMultipleArgs',
        'optArgFilter',
        'parsedDuplicates',
        'parsedName',
      ]);
    });
  });

  test('long option defaults', () => {
    ['--a', ['--a']].forEach((name) => {
      const schema = parseSchema({ opts: [{ name }] });

      expect(schema.opts.size).toBe(1);

      const aOptSchema = schema.opts.get('--a');

      expect(aOptSchema.argAccepted).toBe(false);
      expect(aOptSchema.argRequired).toBe(false);
      expect(aOptSchema.supportsMultipleArgs).toBe(false);
      expect(aOptSchema.optArgFilter).toBeInstanceOf(Function);
      expect(aOptSchema.parsedDuplicates).toBeInstanceOf(Set);
      expect(aOptSchema.parsedName).toBe(null);
      expect(Array.from(Object.keys(aOptSchema))).toStrictEqual([
        'argAccepted',
        'argRequired',
        'supportsMultipleArgs',
        'optArgFilter',
        'parsedDuplicates',
        'parsedName',
      ]);
    });
  });

  test('arg property', () => {
    expect(() =>
      parseSchema({ opts: [{ name: '-a', arg: { required: true } }] }),
    ).not.toThrowError();
    expect(() =>
      parseSchema({ opts: [{ name: '-a', arg: { required: false } }] }),
    ).toThrowError();
    expect(() =>
      parseSchema({
        opts: [{ name: '-a', arg: {} }],
      }),
    ).toThrowError();
    expect(() =>
      parseSchema({
        opts: [{ name: '-a', arg: { required: 'something' } }],
      }),
    ).toThrowError();

    expect(() =>
      parseSchema({ opts: [{ name: '--a', arg: { required: true } }] }),
    ).not.toThrowError();
    expect(() =>
      parseSchema({ opts: [{ name: '--a', arg: { required: false } }] }),
    ).not.toThrowError();
    expect(() =>
      parseSchema({
        opts: [{ name: '--a', arg: {} }],
      }),
    ).toThrowError();
    expect(() =>
      parseSchema({
        opts: [{ name: '--a', arg: { required: 'something' } }],
      }),
    ).toThrowError();
  });

  test(`option's argument filter must be a function`, () => {
    expect(() => {
      parseSchema({
        opts: [{ name: '-a', arg: { required: true, filter: () => {} } }],
      });
    }).not.toThrowError();

    expect(() => {
      parseSchema({
        opts: [{ name: '-a', arg: { required: true, filter: 1 } }],
      });
    }).toThrowError();
  });

  test('option and long option can have the same name', () => {
    [
      {
        opts: [{ name: ['-a', '--a'] }],
      },
      {
        cmds: [{ name: 'up', opts: [{ name: ['-a', '--a'] }] }],
      },
    ].forEach((schema) => {
      expect(() => parseSchema(schema)).not.toThrowError();
    });
  });

  test('duplicates', () => {
    [
      {
        opts: [{ name: '-a' }, { name: '-a' }],
      },
      {
        opts: [{ name: '--a' }, { name: '--a' }],
      },
      {
        opts: [{ name: ['-a', '-a'] }],
      },
      {
        opts: [{ name: ['--a', '--a'] }],
      },
      {
        opts: [{ name: '-y' }, { name: '-b' }, { name: ['-y'] }],
      },
      {
        opts: [{ name: '-c' }],
        cmds: [{ name: 'up', opts: [{ name: '-c' }] }],
      },
      {
        cmds: [
          {
            name: 'up',
            opts: [{ name: '-t' }],
            cmds: [{ name: 'down', opts: [{ name: '-t' }] }],
          },
        ],
      },
      {
        cmds: [
          {
            name: 'up',
            opts: [{ name: '--t' }],
            cmds: [{ name: 'down', opts: [{ name: '--t' }] }],
          },
        ],
      },
    ].forEach((schema) => {
      expect(() => parseSchema(schema)).toThrowError();
    });
  });
});

describe('schema - cmds', () => {
  test('defaults', () => {
    ['up', ['up']].forEach((name) => {
      const schema = parseSchema({ cmds: [{ name }] });

      expect(schema.opts).toBeInstanceOf(Map);
      expect(schema.opts).toHaveProperty('size', 0);
      expect(schema.cmds).toBeInstanceOf(Map);
      expect(schema.cmds).toHaveProperty('size', 1);
      expect(schema.minArgs).toBe(1);
      expect(schema.maxArgs).toBe(1);
      expect(schema.argFilter).toBeInstanceOf(Function);
      expect(schema.expectsCmd).toBe(true);
      expect(Array.from(Object.keys(schema))).toStrictEqual([
        'opts',
        'cmds',
        'minArgs',
        'maxArgs',
        'argFilter',
        'expectsCmd',
      ]);

      const upCmdSchema = schema.cmds.get('up');

      expect(upCmdSchema.opts).toBeInstanceOf(Map);
      expect(upCmdSchema.opts).toHaveProperty('size', 0);
      expect(upCmdSchema.cmds).toBeInstanceOf(Map);
      expect(upCmdSchema.cmds).toHaveProperty('size', 0);
      expect(upCmdSchema.minArgs).toBe(0);
      expect(upCmdSchema.maxArgs).toBe(Infinity);
      expect(upCmdSchema.argFilter).toBeInstanceOf(Function);
      expect(upCmdSchema.expectsCmd).toBe(false);
      expect(Array.from(Object.keys(upCmdSchema))).toStrictEqual([
        'opts',
        'cmds',
        'minArgs',
        'maxArgs',
        'argFilter',
        'expectsCmd',
      ]);
    });
  });

  test('cmds array must be populated in order for `expectsCmd` to be true', () => {
    const schema = parseSchema({ cmds: [] });

    expect(schema.opts).toBeInstanceOf(Map);
    expect(schema.opts).toHaveProperty('size', 0);
    expect(schema.cmds).toBeInstanceOf(Map);
    expect(schema.cmds).toHaveProperty('size', 0);
    expect(schema.minArgs).toBe(0);
    expect(schema.maxArgs).toBe(Infinity);
    expect(schema.argFilter).toBeInstanceOf(Function);
    expect(schema.expectsCmd).toBe(false);
    expect(Array.from(Object.keys(schema))).toStrictEqual([
      'opts',
      'cmds',
      'minArgs',
      'maxArgs',
      'argFilter',
      'expectsCmd',
    ]);
  });

  test('nested duplicate commands are allowed', () => {
    [
      {
        cmds: [
          {
            name: 'up',
            cmds: [{ name: 'up' }],
          },
        ],
      },
      {
        cmds: [
          {
            name: 'up',
            cmds: [
              {
                name: 'up',
                cmds: [
                  {
                    name: 'up',
                  },
                ],
              },
            ],
          },
        ],
      },
    ].forEach((schema) => {
      expect(() => parseSchema(schema)).not.toThrowError();
    });
  });

  test('duplicates', () => {
    [
      {
        cmds: [{ name: 'down' }, { name: 'down' }],
      },
      {
        cmds: [{ name: ['down', 'down'] }],
      },
      {
        cmds: [{ name: 'down' }, { name: 'up' }, { name: ['down'] }],
      },
      {
        cmds: [
          {
            name: 'down',
            cmds: [{ name: 'list' }, { name: 'up' }, { name: 'list' }],
          },
        ],
        cmds: [
          {
            name: 'down',
            cmds: [{ name: 'list' }, { name: 'up' }, { name: ['list'] }],
          },
        ],
      },
      {
        cmds: [
          {
            name: 'up',
            cmds: [
              {
                name: 'up',
                cmds: [{ name: 'up' }, { name: 'up' }],
              },
            ],
          },
        ],
      },
    ].forEach((schema) => {
      expect(() => parseSchema(schema)).toThrowError();
    });
  });
});
