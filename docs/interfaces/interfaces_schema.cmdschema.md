[getopts - v3.0.0](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / CmdSchema

# Interface: CmdSchema

[interfaces/schema](../modules/interfaces_schema.md).CmdSchema

Schema for a CLI command.

## Hierarchy

- [`Schema`](interfaces_schema.Schema.md)

  ↳ **`CmdSchema`**

## Table of contents

### Properties

- [args](interfaces_schema.CmdSchema.md#args)
- [cmds](interfaces_schema.CmdSchema.md#cmds)
- [name](interfaces_schema.CmdSchema.md#name)
- [opts](interfaces_schema.CmdSchema.md#opts)

## Properties

### args

• `Optional` **args**: [`ArgsSchema`](interfaces_schema.ArgsSchema.md)

CLI arguments.

#### Inherited from

[Schema](interfaces_schema.Schema.md).[args](interfaces_schema.Schema.md#args)

#### Defined in

[src/interfaces/schema.ts:144](https://github.com/prasadrajandran/node-getopts/blob/43d0c83/src/interfaces/schema.ts#L144)

---

### cmds

• `Optional` **cmds**: [`CmdSchema`](interfaces_schema.CmdSchema.md)[]

CLI commands.

Define all commands that the CLI is capable of receiving here.

If this is defined, it is assumed that the CLI expects commands instead of
arguments (this affects what `minArgs` and `maxArgs` do).

#### Inherited from

[Schema](interfaces_schema.Schema.md).[cmds](interfaces_schema.Schema.md#cmds)

#### Defined in

[src/interfaces/schema.ts:140](https://github.com/prasadrajandran/node-getopts/blob/43d0c83/src/interfaces/schema.ts#L140)

---

### name

• **name**: `string` \| `string`[]

Name of the CLI command. Also accepts an array of names.

#### Defined in

[src/interfaces/schema.ts:119](https://github.com/prasadrajandran/node-getopts/blob/43d0c83/src/interfaces/schema.ts#L119)

---

### opts

• `Optional` **opts**: [`OptSchema`](interfaces_schema.OptSchema.md)[]

CLI options.

Define all options that the CLI is capable of receiving here.

#### Inherited from

[Schema](interfaces_schema.Schema.md).[opts](interfaces_schema.Schema.md#opts)

#### Defined in

[src/interfaces/schema.ts:131](https://github.com/prasadrajandran/node-getopts/blob/43d0c83/src/interfaces/schema.ts#L131)
