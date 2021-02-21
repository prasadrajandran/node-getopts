[getopts - v1.0.0-alpha.3](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / Schema

# Interface: Schema

[interfaces/schema](../modules/interfaces_schema.md).Schema

CLI schema.

## Hierarchy

- **Schema**

  ↳ [_CmdSchema_](interfaces_schema.cmdschema.md)

## Table of contents

### Properties

- [argFilter](interfaces_schema.schema.md#argfilter)
- [cmds](interfaces_schema.schema.md#cmds)
- [maxArgs](interfaces_schema.schema.md#maxargs)
- [minArgs](interfaces_schema.schema.md#minargs)
- [opts](interfaces_schema.schema.md#opts)

## Properties

### argFilter

• `Optional` **argFilter**: _undefined_ \| [_ArgFilter_](interfaces_schema.argfilter.md)

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

Defined in: [src/interfaces/schema.ts:130](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/schema.ts#L130)

---

### cmds

• `Optional` **cmds**: _undefined_ \| [_CmdSchema_](interfaces_schema.cmdschema.md)[]

CLI Commands.

Define all commands that the CLI is capable of receiving here.

If this is defined, it is assumed that the CLI expects commands instead of
arguments (this affects what `minArgs` and `maxArgs` do).

Defined in: [src/interfaces/schema.ts:92](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/schema.ts#L92)

---

### maxArgs

• `Optional` **maxArgs**: _undefined_ \| _number_

Maximum number of CLI arguments expected.

If the CLI expects arguments (i.e. `cmds` is undefined):

- The default is 0 (arguments are optional)

If the CLI expects commands (i.e. `cmds` is defined):

- The only valid value is 1. This should ideally be left undefined if
  commands are expected.

Defined in: [src/interfaces/schema.ts:115](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/schema.ts#L115)

---

### minArgs

• `Optional` **minArgs**: _undefined_ \| _number_

Minimum number of CLI arguments expected.

If the CLI expects arguments (i.e. `cmds` is undefined):

- The default is 0 (arguments are optional)

If the CLI expects commands (i.e. `cmds` is defined):

- The only valid values are 0 (command is optional) or 1 (command is
  required)
- The default is 1 (command is required)

Defined in: [src/interfaces/schema.ts:104](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/schema.ts#L104)

---

### opts

• `Optional` **opts**: _undefined_ \| [_OptSchema_](interfaces_schema.optschema.md)[]

CLI options.

Define all options that the CLI is capable of receiving here.

Defined in: [src/interfaces/schema.ts:83](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/schema.ts#L83)
