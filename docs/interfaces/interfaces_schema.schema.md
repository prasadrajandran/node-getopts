[getopts - v2.0.0](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / Schema

# Interface: Schema

[interfaces/schema](../modules/interfaces_schema.md).Schema

CLI schema.

## Hierarchy

- **`Schema`**

  ↳ [`CmdSchema`](interfaces_schema.CmdSchema.md)

## Table of contents

### Properties

- [argFilter](interfaces_schema.Schema.md#argfilter)
- [cmds](interfaces_schema.Schema.md#cmds)
- [maxArgs](interfaces_schema.Schema.md#maxargs)
- [minArgs](interfaces_schema.Schema.md#minargs)
- [opts](interfaces_schema.Schema.md#opts)

## Properties

### argFilter

• `Optional` **argFilter**: [`ArgFilter`](interfaces_schema.ArgFilter.md)

Pass the CLI arguments through a filter.

Example use cases:

- Input validation (is it within some defined range)
- Type casting (convert the string to a number)
- etc

Notes:

- This filter is only meant to process arguments. If `cmds` is defined,
  this filter will be ignored.
- Filters are executed within a try/catch block. If an error is thrown, it
  will be captured and stored inside the `errors` array.

#### Defined in

[src/interfaces/schema.ts:129](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/schema.ts#L129)

---

### cmds

• `Optional` **cmds**: [`CmdSchema`](interfaces_schema.CmdSchema.md)[]

CLI Commands.

Define all commands that the CLI is capable of receiving here.

If this is defined, it is assumed that the CLI expects commands instead of
arguments (this affects what `minArgs` and `maxArgs` do).

#### Defined in

[src/interfaces/schema.ts:91](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/schema.ts#L91)

---

### maxArgs

• `Optional` **maxArgs**: `number`

Maximum number of CLI arguments expected.

If the CLI expects arguments (i.e. `cmds` is undefined):

- The default is 0 (arguments are optional)

If the CLI expects commands (i.e. `cmds` is defined):

- The only valid value is 1. This should ideally be left undefined if
  commands are expected.

#### Defined in

[src/interfaces/schema.ts:114](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/schema.ts#L114)

---

### minArgs

• `Optional` **minArgs**: `number`

Minimum number of CLI arguments expected.

If the CLI expects arguments (i.e. `cmds` is undefined):

- The default is 0 (arguments are optional)

If the CLI expects commands (i.e. `cmds` is defined):

- The only valid values are 0 (command is optional) or 1 (command is
  required)
- The default is 1 (command is required)

#### Defined in

[src/interfaces/schema.ts:103](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/schema.ts#L103)

---

### opts

• `Optional` **opts**: [`OptSchema`](interfaces_schema.OptSchema.md)[]

CLI options.

Define all options that the CLI is capable of receiving here.

#### Defined in

[src/interfaces/schema.ts:82](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/schema.ts#L82)
