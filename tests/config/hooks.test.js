const merge = require('deepmerge');
const setArgv = require('../helpers/set_argv');
const resetArgv = require('../helpers/reset_argv');
const { getopts } = require('../../dist');

const testData = {
  helpOpt: {
    'defaults, hook priority': {
      '--help': { helpOpt: { activated: true } },
      '--version --help': { helpOpt: { activated: true } },
      '--help --version': { helpOpt: { activated: true } },
      '--invalidopt --help': { helpOpt: { activated: true } },
      'randomarg --help': { helpOpt: { activated: true } },
    },
    'not called if not activated': {
      '': {},
      'somearg -sdd': { parserErrors: { activated: true } },
    },
    'can adjust opt name': {
      '-n': { helpOpt: { activated: true, name: '-n' } },
      '--num': { helpOpt: { activated: true, name: ['-n', '--num'] } },
      '--help': { helpOpt: { name: '-n' } },
    },
    'can adjust exit code': {
      '--help': { helpOpt: { activated: true, exitCode: 1 } },
      '--help': { helpOpt: { activated: true, exitCode: false } },
    },
  },
  versionOpt: {
    'defaults, hook priority': {
      '--help --version': { helpOpt: { activated: true } },
      '--invalidopt --version': { versionOpt: { activated: true } },
      'randomarg --version': { versionOpt: { activated: true } },
    },
    'not called if not activated': {
      '': {},
      'somearg -sdd': { parserErrors: { activated: true } },
    },
    'can adjust opt name': {
      '-n': { versionOpt: { activated: true, name: '-n' } },
      '--num': { versionOpt: { activated: true, name: ['-n', '--num'] } },
      '--version': { versionOpt: { name: '-n' } },
    },
    'can adjust exit code': {
      '--version': { versionOpt: { activated: true, exitCode: 1 } },
      '--version': { versionOpt: { activated: true, exitCode: false } },
    },
  },
  parserErrors: {
    'defaults, hook priority': {
      '--help --version --sds': { helpOpt: { activated: true } },
      '--invalidopt --version': { versionOpt: { activated: true } },
      '--randomarg': { parserErrors: { activated: true } },
    },
    'not called if not activated': {
      '': {},
      'somearg': {},
      '--help': { helpOpt: { activated: true } },
    },
    'can adjust exit code': {
      '--invalidopt': { parserErrors: { activated: true, exitCode: 0 } },
      '--invalidopt': { parserErrors: { activated: true, exitCode: false } },
    },
  },
};

describe('config.hooks', () => {
  let processExitSpy = null;
  const helpOptCallback = jest.fn();
  const versionOptCallback = jest.fn();
  const parserErrorsCallback = jest.fn();

  beforeAll(() => {
    processExitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {});
  });

  beforeEach(() => {
    resetArgv();
  });

  afterEach(() => {
    processExitSpy.mockReset();
    helpOptCallback.mockReset();
    versionOptCallback.mockReset();
    parserErrorsCallback.mockReset();
  });

  afterAll(() => {
    processExitSpy.mockRestore();
  });

  const schema = {
    opts: [
      { name: ['-n', '--num'] },
      { name: '--help' },
      { name: '--version' },
    ],
  };

  const baseConfig = {
    hooks: {
      helpOpt: { callback: helpOptCallback },
      versionOpt: { callback: versionOptCallback },
      parserErrors: { callback: parserErrorsCallback },
    },
  };

  for (const hookDescription of Object.keys(testData)) {
    describe(hookDescription, () => {
      for (const hookTestDescription of Object.keys(
        testData[hookDescription],
      )) {
        describe(hookTestDescription, () => {
          for (const [argv, data] of Object.entries(
            testData[hookDescription][hookTestDescription],
          )) {
            test(argv, () => {
              const { helpOpt, versionOpt, parserErrors } = data;
              setArgv(argv);

              const config = merge({}, baseConfig);
              const h = config.hooks;
              h.helpOpt = merge(h.helpOpt, helpOpt || {});
              h.versionOpt = merge(h.versionOpt, versionOpt || {});
              h.parserErrors = merge(h.parserErrors, parserErrors || {});

              const helpOptActivated = h.helpOpt.activated || false;
              const versionOptActivated = h.versionOpt.activated || false;
              const parserErrorsActivated = h.parserErrors.activated || false;
              delete h.helpOpt.activated;
              delete h.versionOpt.activated;
              delete h.parserErrors.activated;

              const parserResults = getopts(schema, config);

              if (helpOptActivated) {
                expect(helpOptCallback).toHaveBeenCalledTimes(1);
                expect(helpOptCallback).toHaveBeenCalledWith(parserResults);
              } else {
                expect(helpOptCallback).toHaveBeenCalledTimes(0);
              }

              if (versionOptActivated) {
                expect(versionOptCallback).toHaveBeenCalledTimes(1);
                expect(versionOptCallback).toHaveBeenCalledWith(parserResults);
              } else {
                expect(versionOptCallback).toHaveBeenCalledTimes(0);
              }

              if (parserErrorsActivated) {
                expect(parserErrorsCallback).toHaveBeenCalledTimes(1);
                expect(parserErrorsCallback).toHaveBeenCalledWith(
                  parserResults,
                );
              } else {
                expect(parserErrorsCallback).toHaveBeenCalledTimes(0);
              }

              let exitCode = undefined;
              if (helpOptActivated) {
                exitCode = h.helpOpt.exitCode ?? 0;
              } else if (versionOptActivated) {
                exitCode = h.versionOpt.exitCode ?? 0;
              } else if (parserErrorsActivated) {
                exitCode = h.parserErrors.exitCode ?? 1;
              }

              if (
                helpOptActivated |
                  versionOptActivated |
                  parserErrorsActivated &&
                (exitCode !== false || exitCode === undefined)
              ) {
                expect(processExitSpy).toHaveBeenCalledTimes(1);
                expect(processExitSpy).toHaveBeenCalledWith(exitCode);
              } else {
                expect(processExitSpy).toHaveBeenCalledTimes(0);
              }
            });
          }
        });
      }
    });
  }
});
