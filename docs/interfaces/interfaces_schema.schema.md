[getopts - v3.0.0](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / Schema

# Interface: Schema

[interfaces/schema](../modules/interfaces_schema.md).Schema

CLI schema.

## Hierarchy

- **`Schema`**

  ↳ [`CmdSchema`](interfaces_schema.CmdSchema.md)

## Table of contents

### Properties

- [args](interfaces_schema.Schema.md#args)
- [cmds](interfaces_schema.Schema.md#cmds)
- [opts](interfaces_schema.Schema.md#opts)

## Properties

### args

• `Optional` **args**: [`ArgsSchema`](interfaces_schema.ArgsSchema.md)

CLI arguments.

#### Defined in

[src/interfaces/schema.ts:144](https://github.com/prasadrajandran/node-getopts/blob/43d0c83/src/interfaces/schema.ts#L144)

---

### cmds

• `Optional` **cmds**: [`CmdSchema`](interfaces_schema.CmdSchema.md)[]

CLI commands.

Define all commands that the CLI is capable of receiving here.

If this is defined, it is assumed that the CLI expects commands instead of
arguments (this affects what `minArgs` and `maxArgs` do).

#### Defined in

[src/interfaces/schema.ts:140](https://github.com/prasadrajandran/node-getopts/blob/43d0c83/src/interfaces/schema.ts#L140)

---

### opts

• `Optional` **opts**: [`OptSchema`](interfaces_schema.OptSchema.md)[]

CLI options.

Define all options that the CLI is capable of receiving here.

#### Defined in

[src/interfaces/schema.ts:131](https://github.com/prasadrajandran/node-getopts/blob/43d0c83/src/interfaces/schema.ts#L131)
