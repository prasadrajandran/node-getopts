[getopts - v4.0.1](../README.md) / [interfaces/parsed_input](../modules/interfaces_parsed_input.md) / ParsedInput

# Interface: ParsedInput

[interfaces/parsed_input](../modules/interfaces_parsed_input.md).ParsedInput

Parsed CLI input.

## Table of contents

### Properties

- [args](interfaces_parsed_input.ParsedInput.md#args)
- [cmds](interfaces_parsed_input.ParsedInput.md#cmds)
- [errors](interfaces_parsed_input.ParsedInput.md#errors)
- [opts](interfaces_parsed_input.ParsedInput.md#opts)

## Properties

### args

• **args**: `unknown`[]

Parsed CLI arguments.

#### Defined in

[src/interfaces/parsed_input.ts:43](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/interfaces/parsed_input.ts#L43)

---

### cmds

• **cmds**: `string`[]

Parsed CLI commands.

#### Defined in

[src/interfaces/parsed_input.ts:35](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/interfaces/parsed_input.ts#L35)

---

### errors

• **errors**: [`ParserError`](../classes/classes_parser_errors.ParserError.md)<`Record`<`string`, `unknown`\>\>[]

Parser, argument filter, and option filter errors.

#### Defined in

[src/interfaces/parsed_input.ts:47](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/interfaces/parsed_input.ts#L47)

---

### opts

• **opts**: [`OptMap`](../classes/classes_opt_map.OptMap.md)

Parsed CLI options.

#### Defined in

[src/interfaces/parsed_input.ts:39](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/interfaces/parsed_input.ts#L39)
