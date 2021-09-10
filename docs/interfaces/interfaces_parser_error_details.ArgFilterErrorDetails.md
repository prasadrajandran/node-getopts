[getopts - v4.0.0](../README.md) / [interfaces/parser_error_details](../modules/interfaces_parser_error_details.md) / ArgFilterErrorDetails

# Interface: ArgFilterErrorDetails

[interfaces/parser_error_details](../modules/interfaces_parser_error_details.md).ArgFilterErrorDetails

**`internal`**

## Hierarchy

- `Record`<`string`, `unknown`\>

  ↳ **`ArgFilterErrorDetails`**

## Table of contents

### Properties

- [arg](interfaces_parser_error_details.ArgFilterErrorDetails.md#arg)
- [argFilter](interfaces_parser_error_details.ArgFilterErrorDetails.md#argfilter)
- [argFilterError](interfaces_parser_error_details.ArgFilterErrorDetails.md#argfiltererror)

## Properties

### arg

• **arg**: `string`

CLI argument value.

#### Defined in

[src/interfaces/parser_error_details.ts:60](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/parser_error_details.ts#L60)

---

### argFilter

• **argFilter**: [`ArgFilter`](interfaces_schema.ArgFilter.md)

CLI argument's filter that threw the exception.

#### Defined in

[src/interfaces/parser_error_details.ts:64](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/parser_error_details.ts#L64)

---

### argFilterError

• **argFilterError**: `unknown`

Exception that was thrown by the CLI argument's filter.

#### Defined in

[src/interfaces/parser_error_details.ts:68](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/parser_error_details.ts#L68)
