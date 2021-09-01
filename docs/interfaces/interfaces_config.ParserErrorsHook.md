[getopts - v3.1.0](../README.md) / [interfaces/config](../modules/interfaces_config.md) / ParserErrorsHook

# Interface: ParserErrorsHook

[interfaces/config](../modules/interfaces_config.md).ParserErrorsHook

## Table of contents

### Properties

- [callback](interfaces_config.ParserErrorsHook.md#callback)
- [exitCode](interfaces_config.ParserErrorsHook.md#exitcode)

## Properties

### callback

• **callback**: `HookCallback`

Callback to execute if the hook is activated. E.g. log error messages to
stderr.

#### Defined in

[src/interfaces/config.ts:94](https://github.com/prasadrajandran/node-getopts/blob/ff39d95/src/interfaces/config.ts#L94)

---

### exitCode

• `Optional` **exitCode**: `number` \| `false`

If the hook is activated, it will terminate the process after the callback
is executed. This behaviour can be disabled by setting it to false. The
default is 1.

**`see`** [https://nodejs.org/api/process.html#process_exit_codes](https://nodejs.org/api/process.html#process_exit_codes)

#### Defined in

[src/interfaces/config.ts:89](https://github.com/prasadrajandran/node-getopts/blob/ff39d95/src/interfaces/config.ts#L89)
