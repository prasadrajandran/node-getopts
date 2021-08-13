[getopts - v2.0.0](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / CmdSchema

# Interface: CmdSchema

[interfaces/schema](../modules/interfaces_schema.md).CmdSchema

Schema for a CLI command.

## Hierarchy

- [`Schema`](interfaces_schema.Schema.md)

  ↳ **`CmdSchema`**

## Table of contents

### Properties

- [argFilter](interfaces_schema.CmdSchema.md#argfilter)
- [cmds](interfaces_schema.CmdSchema.md#cmds)
- [maxArgs](interfaces_schema.CmdSchema.md#maxargs)
- [minArgs](interfaces_schema.CmdSchema.md#minargs)
- [name](interfaces_schema.CmdSchema.md#name)
- [opts](interfaces_schema.CmdSchema.md#opts)

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

#### Inherited from

[Schema](interfaces_schema.Schema.md).[argFilter](interfaces_schema.Schema.md#argfilter)

#### Defined in

[src/interfaces/schema.ts:129](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/schema.ts#L129)

---

### cmds

• `Optional` **cmds**: [`CmdSchema`](interfaces_schema.CmdSchema.md)[]

CLI Commands.

Define all commands that the CLI is capable of receiving here.

If this is defined, it is assumed that the CLI expects commands instead of
arguments (this affects what `minArgs` and `maxArgs` do).

#### Inherited from

[Schema](interfaces_schema.Schema.md).[cmds](interfaces_schema.Schema.md#cmds)

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

#### Inherited from

[Schema](interfaces_schema.Schema.md).[maxArgs](interfaces_schema.Schema.md#maxargs)

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

#### Inherited from

[Schema](interfaces_schema.Schema.md).[minArgs](interfaces_schema.Schema.md#minargs)

#### Defined in

[src/interfaces/schema.ts:103](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/schema.ts#L103)

---

### name

• **name**: `string`

Name of the CLI command.

#### Defined in

[src/interfaces/schema.ts:70](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/schema.ts#L70)

---

### opts

• `Optional` **opts**: [`OptSchema`](interfaces_schema.OptSchema.md)[]

CLI options.

Define all options that the CLI is capable of receiving here.

#### Inherited from

[Schema](interfaces_schema.Schema.md).[opts](interfaces_schema.Schema.md#opts)

#### Defined in

[src/interfaces/schema.ts:82](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/schema.ts#L82)
