const { getopts } = require('../../dist/index');
const setArgv = require('../helpers/set_argv');
const cmdsTestData = require('./data/cmds');
const argsTestData = require('./data/args');
const optsTestData = require('./data/opts');
const longOptsTestData = require('./data/long_opts');

const testData = [
  ...cmdsTestData,
  ...argsTestData,
  ...optsTestData,
  ...longOptsTestData,
];

testData.forEach(([description, testData]) => {
  describe(description, () => {
    testData.forEach(
      ({
        schema,
        argv,
        cmdValues,
        argValues,
        optNames,
        optArgs,
        errorClasses,
      }) => {
        test(`"${argv}"`, () => {
          setArgv(argv);
          const { opts, cmds, args, errors } = getopts(schema);

          if (errorClasses) {
            expect(errors).toHaveLength(errorClasses.length);
            errorClasses.forEach((ErrorClass, i) => {
              expect(errors[i]).toBeInstanceOf(ErrorClass);
            });
          } else {
            expect(errors).toHaveLength(0);
          }
          expect(cmds).toStrictEqual(cmdValues || []);
          expect(args).toStrictEqual(argValues || []);
          expect(Array.from(opts.keys())).toStrictEqual(optNames || []);
          expect(Array.from(opts.values())).toStrictEqual(optArgs || []);
        });
      },
    );
  });
});
