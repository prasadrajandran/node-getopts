const setArgv = require('./helpers/set_argv');
const { getopts } = require('../dist');

const resetArgv = () => setArgv('');

beforeEach(resetArgv);

describe('smoke test', () => {
  test('schema is not required', () => {
    expect(() => getopts()).not.toThrowError();
    expect(() => getopts({})).not.toThrowError();
  });

  test('parses options/commands/arguments', () => {
    setArgv('-n5 --verbose -T create -f -- somefile1 somefile2 -x');

    const { opts, cmds, args, errors } = getopts({
      opts: [
        {
          name: '-n',
          arg: { required: true, filter: (v) => parseInt(v, 10) },
        },
        { name: '--help' },
        { name: ['-V', '--verbose'] },
        { name: ['-S', '--sort', '-T', '--sort-by'] },
      ],
      cmds: [{ name: 'create', opts: [{ name: '-f' }] }],
    });

    expect(errors).toEqual([]);

    expect(Array.from(opts.keys())).toEqual(['-n', '--verbose', '-T', '-f']);
    expect(opts.has('-n')).toBe(true);
    expect(opts.has('--help')).toBe(false);
    expect(opts.has('-V')).toBe(false);
    expect(opts.has('--verbose')).toBe(true);
    expect(opts.has('-S')).toBe(false);
    expect(opts.has('-T')).toBe(true);
    expect(opts.has('--sort')).toBe(false);
    expect(opts.has('--sort-by')).toBe(false);
    expect(opts.has('-f')).toBe(true);

    expect(opts.get('-n')).toEqual(5);
    expect(opts.get('--verbose')).toEqual(undefined);
    expect(opts.get('-f')).toEqual(undefined);

    expect(cmds.length).toEqual(1);
    expect(cmds[0]).toEqual('create');

    expect(args).toEqual(['somefile1', 'somefile2', '-x']);
  });
});
