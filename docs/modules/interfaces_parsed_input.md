[getopts - v2.0.0](../README.md) / interfaces/parsed_input

# Module: interfaces/parsed_input

## Table of contents

### Interfaces

- [ParsedInput](../interfaces/interfaces_parsed_input.ParsedInput.md)

### Type aliases

- [OptArg](interfaces_parsed_input.md#optarg)
- [OptLongName](interfaces_parsed_input.md#optlongname)
- [OptMap](interfaces_parsed_input.md#optmap)
- [OptName](interfaces_parsed_input.md#optname)

## Type aliases

### OptArg

Ƭ **OptArg**: `unknown`

CLI option's argument.

#### Defined in

[src/interfaces/parsed_input.ts:16](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/parsed_input.ts#L16)

---

### OptLongName

Ƭ **OptLongName**: `string`

CLI option's long name.

#### Defined in

[src/interfaces/parsed_input.ts:11](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/parsed_input.ts#L11)

---

### OptMap

Ƭ **OptMap**: `Map`<[`OptName`](interfaces_parsed_input.md#optname) \| [`OptLongName`](interfaces_parsed_input.md#optlongname), [`OptArg`](interfaces_parsed_input.md#optarg)\>

Map of a CLI option to its argument.

Notes:

- If the CLI option does not accept an argument, its argument value will be
  undefined.
- If the argument is optional and an argument wasn't provided, the argument
  value will be undefined.

#### Defined in

[src/interfaces/parsed_input.ts:27](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/parsed_input.ts#L27)

---

### OptName

Ƭ **OptName**: `string`

CLI option's name.

#### Defined in

[src/interfaces/parsed_input.ts:6](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/interfaces/parsed_input.ts#L6)
