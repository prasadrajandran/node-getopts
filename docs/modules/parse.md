[getopts - v1.0.0-alpha.4](../README.md) / parse

# Module: parse

## Table of contents

### Functions

- [parse](parse.md#parse)

## Functions

### parse

▸ `Const`**parse**(`schema`: [_Schema_](../interfaces/interfaces_schema.schema.md), `inputArgs?`: _string_[]): [_ParsedArgs_](../interfaces/interfaces_parsed_args.parsedargs.md)

Parse CLI arguments.

#### Parameters:

| Name        | Type                                                  | Description                                                                                                                                                                |
| :---------- | :---------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `schema`    | [_Schema_](../interfaces/interfaces_schema.schema.md) | CLI schema.                                                                                                                                                                |
| `inputArgs` | _string_[]                                            | CLI input. If explicitly provided, it must match the structure of `process.argv` (i.e. index 0 is the exec path, index 1 is the module, and arguments start from index 2). |

**Returns:** [_ParsedArgs_](../interfaces/interfaces_parsed_args.parsedargs.md)

Defined in: [src/parse.ts:72](https://github.com/prasadrajandran/node-getopts/blob/62e4ad2/src/parse.ts#L72)
