[getopts - v4.0.0](../README.md) / [interfaces/parser_error_details](../modules/interfaces_parser_error_details.md) / UnknownCmdErrorDetails

# Interface: UnknownCmdErrorDetails

[interfaces/parser_error_details](../modules/interfaces_parser_error_details.md).UnknownCmdErrorDetails

**`internal`**

## Hierarchy

- `Record`<`string`, `unknown`\>

  ↳ **`UnknownCmdErrorDetails`**

## Table of contents

### Properties

- [expectedCmds](interfaces_parser_error_details.UnknownCmdErrorDetails.md#expectedcmds)
- [unknownCmd](interfaces_parser_error_details.UnknownCmdErrorDetails.md#unknowncmd)

## Properties

### expectedCmds

• **expectedCmds**: `string`[]

CLI commands that were expected.

#### Defined in

[src/interfaces/parser_error_details.ts:25](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/parser_error_details.ts#L25)

---

### unknownCmd

• **unknownCmd**: `string`

Name of the unknown CLI command.

#### Defined in

[src/interfaces/parser_error_details.ts:21](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/interfaces/parser_error_details.ts#L21)
