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

  test('valid and invalid minArgs/maxArgs values', () => {
    ['a', '1', -1, -Infinity, Infinity].forEach((minArgs) => {
      expect(() => parseSchema({ minArgs })).toThrowError();
    });

    ['a', '1', -1, -Infinity, Number.NEGATIVE_INFINITY].forEach((maxArgs) => {
      expect(() => parseSchema({ maxArgs })).toThrowError();
    });

    [0, Infinity, Number.POSITIVE_INFINITY].forEach((maxArgs) => {
      expect(() => parseSchema({ maxArgs })).not.toThrowError();
    });

    [[0, 0]].forEach(([minArgs, maxArgs]) => {
      expect(() => parseSchema({ minArgs, maxArgs })).not.toThrowError();
    });

    [[1, 0]].forEach(([minArgs, maxArgs]) => {
      expect(() => parseSchema({ minArgs, maxArgs })).toThrowError();
    });
  });

  test('minArgs/maxArgs when cmds is defined', () => {
    const cmds = [{ name: 'up' }];

    [0, 1].forEach((minArgs) => {
      expect(() => parseSchema({ cmds, minArgs })).not.toThrowError();
    });

    [1].forEach((maxArgs) => {
      expect(() => parseSchema({ cmds, maxArgs })).not.toThrowError();
    });

    [-1, 2].forEach((minArgs) => {
      expect(() => parseSchema({ cmds, minArgs })).toThrowError();
    });

    [0, 2].forEach((maxArgs) => {
      expect(() => parseSchema({ cmds, maxArgs })).toThrowError();
    });
  });
});

describe('schema - opts', () => {
  test('option defaults', () => {
    const schema = parseSchema({ opts: [{ name: '-a' }] });

    expect(schema.opts.size).toBe(1);

    const aOptSchema = schema.opts.get('-a');

    expect(aOptSchema.argAccepted).toBe(false);
    expect(aOptSchema.argRequired).toBe(false);
    expect(aOptSchema.argFilter).toBeInstanceOf(Function);
    expect(Array.from(Object.keys(aOptSchema))).toStrictEqual([
      'argAccepted',
      'argRequired',
      'argFilter',
    ]);
  });

  test('long option defaults', () => {
    const schema = parseSchema({ opts: [{ longName: '--a' }] });

    expect(schema.opts.size).toBe(1);

    const aOptSchema = schema.opts.get('--a');

    expect(aOptSchema.argAccepted).toBe(false);
    expect(aOptSchema.argRequired).toBe(false);
    expect(aOptSchema.argFilter).toBeInstanceOf(Function);
    expect(Array.from(Object.keys(aOptSchema))).toStrictEqual([
      'argAccepted',
      'argRequired',
      'argFilter',
    ]);
  });

  test('arg property', () => {
    expect(() =>
      parseSchema({ opts: [{ name: '-a', arg: 'required' }] }),
    ).not.toThrowError();
    expect(() =>
      parseSchema({ opts: [{ name: '-a', arg: 'optional' }] }),
    ).toThrowError();

    expect(() =>
      parseSchema({ opts: [{ longName: '--a', arg: 'required' }] }),
    ).not.toThrowError();
    expect(() =>
      parseSchema({ opts: [{ longName: '--a', arg: 'optional' }] }),
    ).not.toThrowError();
  });

  test('option and long option can have the same name', () => {
    [
      {
        opts: [{ name: '-a', longName: '--a' }],
      },
      {
        cmds: [{ name: 'up', opts: [{ name: '-a', longName: '--a' }] }],
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
        opts: [{ name: '-y' }, { name: '-b' }, { name: '-y' }],
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
            cmds: [{ name: 'down', opts: '-t' }],
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
    const schema = parseSchema({ cmds: [{ name: 'up' }] });

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
        cmds: [{ name: 'down' }, { name: 'up' }, { name: 'down' }],
      },
      {
        cmds: [
          {
            name: 'down',
            cmds: [{ name: 'list' }, { name: 'up' }, { name: 'list' }],
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
