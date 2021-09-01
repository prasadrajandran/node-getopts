[getopts - v3.1.0](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / ArgsSchema

# Interface: ArgsSchema

[interfaces/schema](../modules/interfaces_schema.md).ArgsSchema

## Table of contents

### Properties

- [filter](interfaces_schema.ArgsSchema.md#filter)
- [max](interfaces_schema.ArgsSchema.md#max)
- [min](interfaces_schema.ArgsSchema.md#min)

## Properties

### filter

• `Optional` **filter**: [`ArgFilter`](interfaces_schema.ArgFilter.md)

Run the CLI arguments through a filter.

Example use cases:

- Input validation (is it within some defined range)
- Type casting (convert the string to a number)

Notes:

- This filter is only meant to process arguments. If `cmds` is defined,
  this filter will be ignored.
- Filters are executed within a try/catch block. If an error is thrown, it
  will be captured and stored inside the `errors` array.

#### Defined in

[src/interfaces/schema.ts:108](https://github.com/prasadrajandran/node-getopts/blob/ff39d95/src/interfaces/schema.ts#L108)

---

### max

• `Optional` **max**: `number`

Maximum number of CLI arguments expected.

If the CLI expects arguments (i.e. `cmds` is undefined):

- The default is 0 (arguments are optional)

If the CLI expects commands (i.e. `cmds` is defined):

- The only valid value is 1. This should ideally be left undefined if
  commands are expected.

#### Defined in

[src/interfaces/schema.ts:94](https://github.com/prasadrajandran/node-getopts/blob/ff39d95/src/interfaces/schema.ts#L94)

---

### min

• `Optional` **min**: `number`

Minimum number of CLI arguments expected.

If the CLI expects arguments (i.e. `cmds` is undefined):

- The default is 0 (arguments are optional)

If the CLI expects commands (i.e. `cmds` is defined):

- The only valid values are 0 (command is optional) or 1 (command is
  required)
- The default is 1 (command is required)

#### Defined in

[src/interfaces/schema.ts:83](https://github.com/prasadrajandran/node-getopts/blob/ff39d95/src/interfaces/schema.ts#L83)
