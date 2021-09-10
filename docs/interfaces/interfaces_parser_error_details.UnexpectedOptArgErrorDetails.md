[getopts - v4.0.0](../README.md) / [interfaces/parser_error_details](../modules/interfaces_parser_error_details.md) / UnexpectedOptArgErrorDetails

# Interface: UnexpectedOptArgErrorDetails

[interfaces/parser_error_details](../modules/interfaces_parser_error_details.md).UnexpectedOptArgErrorDetails

**`internal`**

## Hierarchy

- `Record`<`string`, `unknown`\>

  ↳ **`UnexpectedOptArgErrorDetails`**

## Table of contents

### Properties

- [arg](interfaces_parser_error_details.UnexpectedOptArgErrorDetails.md#arg)
- [opt](interfaces_parser_error_details.UnexpectedOptArgErrorDetails.md#opt)

## Properties

### arg

• **arg**: `string`

The unexpected argument the option (that doesn't accept arguments) was
provided.

#### Defined in

[src/interfaces/parser_error_details.ts:50](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/parser_error_details.ts#L50)

---

### opt

• **opt**: `string`

Option that received the unexpected argument.

#### Defined in

[src/interfaces/parser_error_details.ts:45](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/parser_error_details.ts#L45)
