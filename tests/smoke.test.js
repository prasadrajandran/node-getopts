const setArgv = require('./helpers/set_argv');
const resetArgv = require('./helpers/reset_argv');
const { getopts } = require('../dist');

beforeEach(resetArgv);

describe('smoke test', () => {
  test('schema is not required', () => {
    expect(() => getopts()).not.toThrowError();
    expect(() => getopts({})).not.toThrowError();
  });

  test('parses options/commands/arguments', () => {
    const schema = {
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
    };

    // Note: double spaces in between some of the tokens is intentional.
    const argv = '-n5 --verbose  -T  create -f -- somefile1 somefile2 -x';

    [
      () => {
        setArgv(argv);
        return getopts(schema);
      },
      () => {
        return getopts(schema, { argv });
      },
      () => {
        return getopts(schema, { argv: argv.split(' ').filter((t) => t) });
      },
    ].forEach((callback) => {
      const { opts, cmds, args, errors } = callback();

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
});
