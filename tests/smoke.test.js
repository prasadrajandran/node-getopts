const setArgv = require('./helpers/set_argv');
const { getopts } = require('../d/index');

const resetArgv = () => setArgv('');

beforeEach(resetArgv);

describe('smoke test', () => {
  test('schema is not required', () => {
    expect(() => getopts()).not.toThrowError();
    expect(() => getopts({})).not.toThrowError();
  });

  test('parses options/commands/arguments', () => {
    const argvInput = '-n5 --verbose create -f -- somefile1 somefile2 -x';
    setArgv(argvInput);

    const { opts, cmds, args, errors } = getopts({
      opts: [
        { name: '-n', arg: 'required', argFilter: (v) => parseInt(v, 10) },
        { longName: '--verbose' },
      ],
      cmds: [{ name: 'create', opts: [{ name: '-f' }] }],
    });

    expect(errors).toEqual([]);

    expect(Array.from(opts.keys())).toEqual(['-n', '--verbose', '-f']);
    expect(opts.has('-n')).toBe(true);
    expect(opts.has('--verbose')).toBe(true);
    expect(opts.has('-f')).toBe(true);

    expect(opts.get('-n')).toEqual(5);
    expect(opts.get('--verbose')).toEqual(undefined);
    expect(opts.get('-f')).toEqual(undefined);

    expect(cmds.length).toEqual(1);
    expect(cmds[0]).toEqual('create');

    expect(args).toEqual(['somefile1', 'somefile2', '-x']);
  });
});
