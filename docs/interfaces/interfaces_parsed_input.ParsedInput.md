[getopts - v2.0.0](../README.md) / [interfaces/parsed_input](../modules/interfaces_parsed_input.md) / ParsedInput

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

[src/interfaces/parsed_input.ts:44](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/parsed_input.ts#L44)

---

### cmds

• **cmds**: `string`[]

Parsed CLI commands.

#### Defined in

[src/interfaces/parsed_input.ts:36](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/parsed_input.ts#L36)

---

### errors

• **errors**: [`ParserError`](../classes/classes_errors.ParserError.md)[]

Parser, argument filter, and option filter errors.

#### Defined in

[src/interfaces/parsed_input.ts:48](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/parsed_input.ts#L48)

---

### opts

• **opts**: [`OptMap`](../modules/interfaces_parsed_input.md#optmap)

Parsed CLI options.

#### Defined in

[src/interfaces/parsed_input.ts:40](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/parsed_input.ts#L40)
