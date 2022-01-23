[getopts - v4.0.1](../README.md) / [interfaces/parser_error_details](../modules/interfaces_parser_error_details.md) / OptArgFilterErrorDetails

# Interface: OptArgFilterErrorDetails

[interfaces/parser_error_details](../modules/interfaces_parser_error_details.md).OptArgFilterErrorDetails

**`internal`**

## Hierarchy

- `Record`<`string`, `unknown`\>

  ↳ **`OptArgFilterErrorDetails`**

## Table of contents

### Properties

- [arg](interfaces_parser_error_details.OptArgFilterErrorDetails.md#arg)
- [opt](interfaces_parser_error_details.OptArgFilterErrorDetails.md#opt)
- [optArgFilter](interfaces_parser_error_details.OptArgFilterErrorDetails.md#optargfilter)
- [optArgFilterError](interfaces_parser_error_details.OptArgFilterErrorDetails.md#optargfiltererror)

## Properties

### arg

• **arg**: `string`

CLI option's argument that generated the exception.

#### Defined in

[src/interfaces/parser_error_details.ts:82](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/interfaces/parser_error_details.ts#L82)

---

### opt

• **opt**: `string`

CLI option that owns the filter that threw the exception.

#### Defined in

[src/interfaces/parser_error_details.ts:78](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/interfaces/parser_error_details.ts#L78)

---

### optArgFilter

• **optArgFilter**: [`OptArgFilter`](interfaces_schema.OptArgFilter.md)

CLI option's argument filter that threw the exception.

#### Defined in

[src/interfaces/parser_error_details.ts:86](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/interfaces/parser_error_details.ts#L86)

---

### optArgFilterError

• **optArgFilterError**: `unknown`

Exception that was thrown by the CLI option's argument filter.

#### Defined in

[src/interfaces/parser_error_details.ts:90](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/interfaces/parser_error_details.ts#L90)
