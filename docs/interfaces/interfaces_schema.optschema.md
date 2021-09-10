[getopts - v4.0.0](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / OptSchema

# Interface: OptSchema

[interfaces/schema](../modules/interfaces_schema.md).OptSchema

Schema for a CLI option.

## Table of contents

### Properties

- [arg](interfaces_schema.OptSchema.md#arg)
- [name](interfaces_schema.OptSchema.md#name)

## Properties

### arg

• `Optional` **arg**: [`OptArgSchema`](interfaces_schema.OptArgSchema.md)

Configuration object of the CLI option (if applicable).

#### Defined in

[src/interfaces/schema.ts:68](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/schema.ts#L68)

---

### name

• **name**: `string` \| `string`[]

Name or long name of the CLI option. Also accepts an array of names.

Examples:

- "-a", "-A", etc.
- "--sort-by", "--append", etc.
- ["-S", "--sort-by"]
- ["-S", "--sort", "--sort-by"]

#### Defined in

[src/interfaces/schema.ts:64](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/schema.ts#L64)
