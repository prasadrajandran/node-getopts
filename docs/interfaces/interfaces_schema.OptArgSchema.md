[getopts - v3.1.0](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / OptArgSchema

# Interface: OptArgSchema

[interfaces/schema](../modules/interfaces_schema.md).OptArgSchema

## Table of contents

### Properties

- [filter](interfaces_schema.OptArgSchema.md#filter)
- [multiple](interfaces_schema.OptArgSchema.md#multiple)
- [required](interfaces_schema.OptArgSchema.md#required)

## Properties

### filter

• `Optional` **filter**: [`OptArgFilter`](interfaces_schema.OptArgFilter.md)

Run the CLI option's argument through a filter.

Example use cases:

- Input validation (is it within some defined range)
- Type casting (convert the string to a number)

Note: Filters are executed within a try/catch block. If an error is thrown,
it will be captured and stored inside the `errors` array.

#### Defined in

[src/interfaces/schema.ts:48](https://github.com/prasadrajandran/node-getopts/blob/ff39d95/src/interfaces/schema.ts#L48)

---

### multiple

• `Optional` **multiple**: `boolean`

Can the CLI option be repeated so that its arguments are stored in an
array? The default is false.

#### Defined in

[src/interfaces/schema.ts:37](https://github.com/prasadrajandran/node-getopts/blob/ff39d95/src/interfaces/schema.ts#L37)

---

### required

• **required**: `boolean`

Is the CLI option's argument required (true) or optional (false)?

Note: Only long options support optional arguments. So if this is set to
false, at least one long option must be defined.

#### Defined in

[src/interfaces/schema.ts:32](https://github.com/prasadrajandran/node-getopts/blob/ff39d95/src/interfaces/schema.ts#L32)
