[getopts - v1.0.0-alpha.2](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / Schema

# Interface: Schema

[interfaces/schema](../modules/interfaces_schema.md).Schema

Schema.

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

Pass the arguments through a filter for processing.

Defined in: [interfaces/schema.ts:89](https://github.com/prasadrajandran/node-getopts/blob/e4ad7b6/src/interfaces/schema.ts#L89)

---

### cmds

• `Optional` **cmds**: _undefined_ \| [_CmdSchema_](interfaces_schema.cmdschema.md)[]

Commands.

Defined in: [interfaces/schema.ts:73](https://github.com/prasadrajandran/node-getopts/blob/e4ad7b6/src/interfaces/schema.ts#L73)

---

### maxArgs

• `Optional` **maxArgs**: _undefined_ \| _number_

Maximum number of arguments (i.e. arguments that are not options or
commands) expected.
Note: The default is Infinity.

Defined in: [interfaces/schema.ts:85](https://github.com/prasadrajandran/node-getopts/blob/e4ad7b6/src/interfaces/schema.ts#L85)

---

### minArgs

• `Optional` **minArgs**: _undefined_ \| _number_

Minimum number of arguments (i.e. arguments that are not options or
commands) expected.
Note: The default is 0.

Defined in: [interfaces/schema.ts:79](https://github.com/prasadrajandran/node-getopts/blob/e4ad7b6/src/interfaces/schema.ts#L79)

---

### opts

• `Optional` **opts**: _undefined_ \| [_OptSchema_](interfaces_schema.optschema.md)[]

Options.

Defined in: [interfaces/schema.ts:69](https://github.com/prasadrajandran/node-getopts/blob/e4ad7b6/src/interfaces/schema.ts#L69)
