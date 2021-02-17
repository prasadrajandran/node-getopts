[ngetopts](../README.md) / [Modules](../modules.md) / [interfaces/schema](../modules/interfaces_schema.md) / Schema

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

Defined in: [interfaces/schema.ts:88](https://github.com/prasadrajandran/ngetopts/blob/2ee1844/src/interfaces/schema.ts#L88)

---

### cmds

• `Optional` **cmds**: _undefined_ \| [_CmdSchema_](interfaces_schema.cmdschema.md)[]

Commands.

Defined in: [interfaces/schema.ts:72](https://github.com/prasadrajandran/ngetopts/blob/2ee1844/src/interfaces/schema.ts#L72)

---

### maxArgs

• `Optional` **maxArgs**: _undefined_ \| _number_

Maximum number of arguments (i.e. arguments that are not options or
commands) expected.
Note: The default is Infinity.

Defined in: [interfaces/schema.ts:84](https://github.com/prasadrajandran/ngetopts/blob/2ee1844/src/interfaces/schema.ts#L84)

---

### minArgs

• `Optional` **minArgs**: _undefined_ \| _number_

Minimum number of arguments (i.e. arguments that are not options or
commands) expected.
Note: The default is 0.

Defined in: [interfaces/schema.ts:78](https://github.com/prasadrajandran/ngetopts/blob/2ee1844/src/interfaces/schema.ts#L78)

---

### opts

• `Optional` **opts**: _undefined_ \| [_OptSchema_](interfaces_schema.optschema.md)[]

Options.

Defined in: [interfaces/schema.ts:68](https://github.com/prasadrajandran/ngetopts/blob/2ee1844/src/interfaces/schema.ts#L68)
