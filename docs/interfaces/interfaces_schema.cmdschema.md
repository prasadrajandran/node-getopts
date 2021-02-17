[ngetopts](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / CmdSchema

# Interface: CmdSchema

[interfaces/schema](../modules/interfaces_schema.md).CmdSchema

Schema for a command.

## Hierarchy

- [_Schema_](interfaces_schema.schema.md)

  ↳ **CmdSchema**

## Table of contents

### Properties

- [argFilter](interfaces_schema.cmdschema.md#argfilter)
- [cmds](interfaces_schema.cmdschema.md#cmds)
- [maxArgs](interfaces_schema.cmdschema.md#maxargs)
- [minArgs](interfaces_schema.cmdschema.md#minargs)
- [name](interfaces_schema.cmdschema.md#name)
- [opts](interfaces_schema.cmdschema.md#opts)

## Properties

### argFilter

• `Optional` **argFilter**: _undefined_ \| [_ArgFilter_](interfaces_schema.argfilter.md)

Pass the arguments through a filter for processing.

Inherited from: [Schema](interfaces_schema.schema.md).[argFilter](interfaces_schema.schema.md#argfilter)

Defined in: [interfaces/schema.ts:88](https://github.com/prasadrajandran/ngetopts/blob/41ceb2b/src/interfaces/schema.ts#L88)

---

### cmds

• `Optional` **cmds**: _undefined_ \| [_CmdSchema_](interfaces_schema.cmdschema.md)[]

Commands.

Inherited from: [Schema](interfaces_schema.schema.md).[cmds](interfaces_schema.schema.md#cmds)

Defined in: [interfaces/schema.ts:72](https://github.com/prasadrajandran/ngetopts/blob/41ceb2b/src/interfaces/schema.ts#L72)

---

### maxArgs

• `Optional` **maxArgs**: _undefined_ \| _number_

Maximum number of arguments (i.e. arguments that are not options or
commands) expected.
Note: The default is Infinity.

Inherited from: [Schema](interfaces_schema.schema.md).[maxArgs](interfaces_schema.schema.md#maxargs)

Defined in: [interfaces/schema.ts:84](https://github.com/prasadrajandran/ngetopts/blob/41ceb2b/src/interfaces/schema.ts#L84)

---

### minArgs

• `Optional` **minArgs**: _undefined_ \| _number_

Minimum number of arguments (i.e. arguments that are not options or
commands) expected.
Note: The default is 0.

Inherited from: [Schema](interfaces_schema.schema.md).[minArgs](interfaces_schema.schema.md#minargs)

Defined in: [interfaces/schema.ts:78](https://github.com/prasadrajandran/ngetopts/blob/41ceb2b/src/interfaces/schema.ts#L78)

---

### name

• **name**: _string_

Name of the command.

Defined in: [interfaces/schema.ts:58](https://github.com/prasadrajandran/ngetopts/blob/41ceb2b/src/interfaces/schema.ts#L58)

---

### opts

• `Optional` **opts**: _undefined_ \| [_OptSchema_](interfaces_schema.optschema.md)[]

Options.

Inherited from: [Schema](interfaces_schema.schema.md).[opts](interfaces_schema.schema.md#opts)

Defined in: [interfaces/schema.ts:68](https://github.com/prasadrajandran/ngetopts/blob/41ceb2b/src/interfaces/schema.ts#L68)
