[getopts - v4.0.0](../README.md) / [interfaces/parser_error_details](../modules/interfaces_parser_error_details.md) / ExcessArgsErrorDetails

# Interface: ExcessArgsErrorDetails

[interfaces/parser_error_details](../modules/interfaces_parser_error_details.md).ExcessArgsErrorDetails

**`internal`**

## Hierarchy

- `Record`<`string`, `unknown`\>

  ↳ **`ExcessArgsErrorDetails`**

## Table of contents

### Properties

- [excessArgs](interfaces_parser_error_details.ExcessArgsErrorDetails.md#excessargs)
- [maxArgsExpected](interfaces_parser_error_details.ExcessArgsErrorDetails.md#maxargsexpected)
- [numArgsReceived](interfaces_parser_error_details.ExcessArgsErrorDetails.md#numargsreceived)

## Properties

### excessArgs

• **excessArgs**: `string`[]

The excess CLI arguments.

#### Defined in

[src/interfaces/parser_error_details.ts:100](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/parser_error_details.ts#L100)

---

### maxArgsExpected

• **maxArgsExpected**: `number`

The maximum number of arguments the CLI accepts.

#### Defined in

[src/interfaces/parser_error_details.ts:108](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/parser_error_details.ts#L108)

---

### numArgsReceived

• **numArgsReceived**: `number`

The total number of arguments the CLI received.

#### Defined in

[src/interfaces/parser_error_details.ts:104](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/parser_error_details.ts#L104)
