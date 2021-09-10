[getopts - v4.0.0](../README.md) / [interfaces/config](../modules/interfaces_config.md) / HelpOptHook

# Interface: HelpOptHook

[interfaces/config](../modules/interfaces_config.md).HelpOptHook

## Table of contents

### Properties

- [callback](interfaces_config.HelpOptHook.md#callback)
- [exitCode](interfaces_config.HelpOptHook.md#exitcode)
- [name](interfaces_config.HelpOptHook.md#name)

## Properties

### callback

• **callback**: `HookCallback`

Callback to execute if the hook is activated. E.g. log help info to
stdout.

#### Defined in

[src/interfaces/config.ts:56](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/config.ts#L56)

---

### exitCode

• `Optional` **exitCode**: `number` \| `false`

If the hook is activated, it will terminate the process after the callback
is executed. This behaviour can be disabled by setting it to false. The
default is 0.

**`see`** [https://nodejs.org/api/process.html#process_exit_codes](https://nodejs.org/api/process.html#process_exit_codes)

#### Defined in

[src/interfaces/config.ts:51](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/config.ts#L51)

---

### name

• `Optional` **name**: `string` \| `string`[]

Name of the version option. Defaults to "--help"

Note: This option must also be defined in the schema.

#### Defined in

[src/interfaces/config.ts:43](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/config.ts#L43)
