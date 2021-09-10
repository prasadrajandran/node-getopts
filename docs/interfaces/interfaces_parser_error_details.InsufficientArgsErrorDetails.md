[getopts - v4.0.0](../README.md) / [interfaces/parser_error_details](../modules/interfaces_parser_error_details.md) / InsufficientArgsErrorDetails

# Interface: InsufficientArgsErrorDetails

[interfaces/parser_error_details](../modules/interfaces_parser_error_details.md).InsufficientArgsErrorDetails

**`internal`**

## Hierarchy

- `Record`<`string`, `unknown`\>

  ↳ **`InsufficientArgsErrorDetails`**

## Table of contents

### Properties

- [minArgsExpected](interfaces_parser_error_details.InsufficientArgsErrorDetails.md#minargsexpected)
- [numArgsReceived](interfaces_parser_error_details.InsufficientArgsErrorDetails.md#numargsreceived)

## Properties

### minArgsExpected

• **minArgsExpected**: `number`

The minimum number of arguments the CLI expects.

#### Defined in

[src/interfaces/parser_error_details.ts:122](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/parser_error_details.ts#L122)

---

### numArgsReceived

• **numArgsReceived**: `number`

The total number of CLI arguments received.

#### Defined in

[src/interfaces/parser_error_details.ts:118](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/parser_error_details.ts#L118)
