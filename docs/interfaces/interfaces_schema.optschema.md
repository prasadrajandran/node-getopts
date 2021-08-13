[getopts - v2.0.0](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / OptSchema

# Interface: OptSchema

[interfaces/schema](../modules/interfaces_schema.md).OptSchema

Schema for a CLI option.

## Table of contents

### Properties

- [arg](interfaces_schema.OptSchema.md#arg)
- [argFilter](interfaces_schema.OptSchema.md#argfilter)
- [longName](interfaces_schema.OptSchema.md#longname)
- [name](interfaces_schema.OptSchema.md#name)

## Properties

### arg

• `Optional` **arg**: `"required"` \| `"optional"`

Specify if the CLI option accepts an argument. If so, further specify if
the argument is required or optional.

Notes:

- If this is defined, it is automatically assumed that the option accepts
  an argument.
- Only the long option is capable of receiving an optional argument.

#### Defined in

[src/interfaces/schema.ts:46](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/schema.ts#L46)

---

### argFilter

• `Optional` **argFilter**: [`OptArgFilter`](interfaces_schema.OptArgFilter.md)

Pass the CLI option's argument through a filter.

Example use cases:

- Input validation (is it within some defined range)
- Type casting (convert the string to a number)
- etc

Notes:

- Filters are executed within a try/catch block. If an error is thrown, it
  will be captured and stored inside the `errors` array.

#### Defined in

[src/interfaces/schema.ts:59](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/schema.ts#L59)

---

### longName

• `Optional` **longName**: `string`

Long name of the CLI option.
E.g.: "--sort-by", "--append", etc.

#### Defined in

[src/interfaces/schema.ts:36](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/schema.ts#L36)

---

### name

• `Optional` **name**: `string`

Name of the CLI option.
E.g.: "-a", "-A", etc.

#### Defined in

[src/interfaces/schema.ts:31](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/schema.ts#L31)
