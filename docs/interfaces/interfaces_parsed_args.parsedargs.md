[ngetopts](../README.md) / [Modules](../modules.md) / [interfaces/parsed_args](../modules/interfaces_parsed_args.md) / ParsedArgs

# Interface: ParsedArgs

[interfaces/parsed_args](../modules/interfaces_parsed_args.md).ParsedArgs

Parsed CLI arguments.

## Table of contents

### Properties

- [args](interfaces_parsed_args.parsedargs.md#args)
- [cmds](interfaces_parsed_args.parsedargs.md#cmds)
- [config](interfaces_parsed_args.parsedargs.md#config)
- [errors](interfaces_parsed_args.parsedargs.md#errors)
- [execPath](interfaces_parsed_args.parsedargs.md#execpath)
- [input](interfaces_parsed_args.parsedargs.md#input)
- [module](interfaces_parsed_args.parsedargs.md#module)
- [opts](interfaces_parsed_args.parsedargs.md#opts)

## Properties

### args

• **args**: _string_[]

Array of parsed arguments.

Defined in: [interfaces/parsed_args.ts:36](https://github.com/prasadrajandran/ngetopts/blob/2ee1844/src/interfaces/parsed_args.ts#L36)

---

### cmds

• **cmds**: _string_[]

Array of parsed commands.

Defined in: [interfaces/parsed_args.ts:28](https://github.com/prasadrajandran/ngetopts/blob/2ee1844/src/interfaces/parsed_args.ts#L28)

---

### config

• **config**: [_Config_](interfaces_config.config.md)

Parsed CLI schema.

Defined in: [interfaces/parsed_args.ts:12](https://github.com/prasadrajandran/ngetopts/blob/2ee1844/src/interfaces/parsed_args.ts#L12)

---

### errors

• **errors**: [_ParsingError_](interfaces_parsing_error.parsingerror.md)[]

Array of any parsing errors.

Defined in: [interfaces/parsed_args.ts:40](https://github.com/prasadrajandran/ngetopts/blob/2ee1844/src/interfaces/parsed_args.ts#L40)

---

### execPath

• **execPath**: _string_

Absolute pathname of the executable that started the Node.js process.

Defined in: [interfaces/parsed_args.ts:16](https://github.com/prasadrajandran/ngetopts/blob/2ee1844/src/interfaces/parsed_args.ts#L16)

---

### input

• **input**: _string_

CLI arguments that were parsed.

Defined in: [interfaces/parsed_args.ts:24](https://github.com/prasadrajandran/ngetopts/blob/2ee1844/src/interfaces/parsed_args.ts#L24)

---

### module

• **module**: _string_

Path to the JavaScript file being executed.

Defined in: [interfaces/parsed_args.ts:20](https://github.com/prasadrajandran/ngetopts/blob/2ee1844/src/interfaces/parsed_args.ts#L20)

---

### opts

• **opts**: [_OptMap_](../modules/interfaces_opt_map.md#optmap)

Map of parsed options.

Defined in: [interfaces/parsed_args.ts:32](https://github.com/prasadrajandran/ngetopts/blob/2ee1844/src/interfaces/parsed_args.ts#L32)
