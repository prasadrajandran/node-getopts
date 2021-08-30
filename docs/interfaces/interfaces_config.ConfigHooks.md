[getopts - v3.0.0](../README.md) / [interfaces/config](../modules/interfaces_config.md) / ConfigHooks

# Interface: ConfigHooks

[interfaces/config](../modules/interfaces_config.md).ConfigHooks

CLI parser config hooks.

## Table of contents

### Properties

- [helpOpt](interfaces_config.ConfigHooks.md#helpopt)
- [parserErrors](interfaces_config.ConfigHooks.md#parsererrors)
- [versionOpt](interfaces_config.ConfigHooks.md#versionopt)

## Properties

### helpOpt

• `Optional` **helpOpt**: [`HelpOptHook`](interfaces_config.HelpOptHook.md)

Hook for the "help" option.

#### Defined in

[src/interfaces/config.ts:104](https://github.com/prasadrajandran/node-getopts/blob/43d0c83/src/interfaces/config.ts#L104)

---

### parserErrors

• `Optional` **parserErrors**: [`ParserErrorsHook`](interfaces_config.ParserErrorsHook.md)

Hook for parser errors.

#### Defined in

[src/interfaces/config.ts:112](https://github.com/prasadrajandran/node-getopts/blob/43d0c83/src/interfaces/config.ts#L112)

---

### versionOpt

• `Optional` **versionOpt**: [`VersionOptHook`](interfaces_config.VersionOptHook.md)

Hook for the "version" option.

#### Defined in

[src/interfaces/config.ts:108](https://github.com/prasadrajandran/node-getopts/blob/43d0c83/src/interfaces/config.ts#L108)
