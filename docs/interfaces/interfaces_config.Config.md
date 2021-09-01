[getopts - v3.1.0](../README.md) / [interfaces/config](../modules/interfaces_config.md) / Config

# Interface: Config

[interfaces/config](../modules/interfaces_config.md).Config

CLI parser config.

## Table of contents

### Properties

- [argv](interfaces_config.Config.md#argv)
- [hooks](interfaces_config.Config.md#hooks)

## Properties

### argv

• `Optional` **argv**: `string` \| `string`[]

CLI input override. Will default to `process.argv.slice(2)`.

Accepts a string or an array of strings. E.g.:

- "-n arg1 arg2"
- ["-n", "arg1", "arg2"]

#### Defined in

[src/interfaces/config.ts:126](https://github.com/prasadrajandran/node-getopts/blob/ff39d95/src/interfaces/config.ts#L126)

---

### hooks

• `Optional` **hooks**: [`ConfigHooks`](interfaces_config.ConfigHooks.md)

Hooks that can be used to simplify CLI behaviour when:
(1) the help option is activated
(2) the version option is activated
(3) the occurrence of parser errors

The hooks are listed in order of activation priority. This means that if
both (1) and (2) are activated, only (1) will run.

#### Defined in

[src/interfaces/config.ts:136](https://github.com/prasadrajandran/node-getopts/blob/ff39d95/src/interfaces/config.ts#L136)
