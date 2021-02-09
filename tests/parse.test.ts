// @ts-nocheck
import { setArgv } from './helpers/set_argv';
import { parse } from '../src/parse';

beforeEach(() => {
  setArgv('');
});

describe('smoke test parse()', () => {
  test('schema is required', () => {
    expect(() => parse()).toThrowError();
    expect(() => parse({})).not.toThrowError();
  });

  test('parses input', () => {
    setArgv('-n5 --verbose create -f -- some_file1 some_file2 -x');

    const { execPath, module, opts, cmds, args, errors } = parse({
      opts: [
        { name: '-n', arg: 'required', argFilter: (v) => parseInt(v, 10) },
        { longName: '--verbose' },
      ],
      cmds: [{ name: 'create', opts: [{ name: '-f' }] }],
    });

    expect(execPath).toEqual(process.argv[0]);
    expect(module).toEqual(process.argv[1]);
    expect(errors).toEqual([]);

    expect(opts.has('-n')).toBe(true);
    expect(opts.has('--verbose')).toBe(true);
    expect(opts.has('-f')).toBe(true);

    expect(opts.get('-n')).toEqual([5]);
    expect(opts.get('--verbose')).toEqual([]);
    expect(opts.get('-f')).toEqual([]);

    expect(cmds[0]).toEqual('create');

    expect(args).toEqual(['some_file1', 'some_file2', '-x']);
  });
});
