import { inspect } from 'util';
import { parse } from '../src/parse';

const helpOpt = {
  name: 'h',
  longName: 'help',
};

console.log(
  inspect(
    parse({
      opts: [
        { name: '-a', longName: '--app', arg: 'optional' },
        {
          name: '-b',
          longName: '--beyond-this',
          arg: 'required',
        },
        { name: '-c' },
        { name: '-d' },
      ],
      cmds: [
        {
          name: 'up',
          opts: [{ name: '-e' }],
          argFilter: (a, i) => {
            return `${a},${i}`;
          },
        },
      ],
    }),
    false,
    null,
    true,
  ),
);
