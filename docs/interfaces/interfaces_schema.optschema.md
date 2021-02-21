[getopts - v1.0.0-alpha.3](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / OptSchema

# Interface: OptSchema

[interfaces/schema](../modules/interfaces_schema.md).OptSchema

Schema for a CLI option.

## Table of contents

### Properties

- [arg](interfaces_schema.optschema.md#arg)
- [argFilter](interfaces_schema.optschema.md#argfilter)
- [longName](interfaces_schema.optschema.md#longname)
- [name](interfaces_schema.optschema.md#name)

## Properties

### arg

• `Optional` **arg**: _undefined_ \| _required_ \| _optional_

Specify if the CLI option accepts an argument. If so, further specify if
the argument is required or optional.

Notes:

- If this is defined, it is automatically assumed that the option accepts
  arguments.
- Only long options are capable of receiving optional arguments. If this
  set to "optional", the (short) option will not accept arguments.

Defined in: [src/interfaces/schema.ts:47](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/schema.ts#L47)

---

### argFilter

• `Optional` **argFilter**: _undefined_ \| [_OptArgFilter_](interfaces_schema.optargfilter.md)

Pass the CLI option's argument through a filter.

Example use cases:

- Input validation (is it within some defined range)
- Type casting (convert the string to a number)
- etc

Notes:

- Filters are executed within a try/catch block. If an error is thrown, it
  will be captured and stored inside the `errors` array.

Defined in: [src/interfaces/schema.ts:60](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/schema.ts#L60)

---

### longName

• `Optional` **longName**: _undefined_ \| _string_

Long name of the CLI option.
E.g.: "--sort-by", "--append", etc.

Defined in: [src/interfaces/schema.ts:36](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/schema.ts#L36)

---

### name

• `Optional` **name**: _undefined_ \| _string_

Name of the CLI option.
E.g.: "-a", "-A", etc.

Defined in: [src/interfaces/schema.ts:31](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/schema.ts#L31)
