const { getopts } = require('../../dist/index');
const setArgv = require('../helpers/set_argv');
const optsTestData = require('./data/opts');
const longOptsTestData = require('./data/long_opts');

[...optsTestData, ...longOptsTestData].forEach(([description, testData]) => {
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
            expect(errors.length).toBe(errorClasses.length);
            errorClasses.forEach((ErrorClass, i) => {
              expect(errors[i] instanceof ErrorClass).toBe(true);
            });
          } else {
            expect(errors.length).toBe(0);
          }
          if (cmdValues) {
            expect(cmds).toStrictEqual(cmdValues);
          }
          if (argValues) {
            expect(args).toStrictEqual(argValues);
          }
          if (optNames) {
            expect(Array.from(opts.keys())).toStrictEqual(optNames);
          }
          if (optArgs) {
            expect(Array.from(opts.values())).toStrictEqual(optArgs);
          }
        });
      },
    );
  });
});
