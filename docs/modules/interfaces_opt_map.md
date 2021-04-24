[getopts - v1.0.0](../README.md) / interfaces/opt_map

# Module: interfaces/opt_map

## Table of contents

### Type aliases

- [OptArg](interfaces_opt_map.md#optarg)
- [OptLongName](interfaces_opt_map.md#optlongname)
- [OptMap](interfaces_opt_map.md#optmap)
- [OptName](interfaces_opt_map.md#optname)

## Type aliases

### OptArg

Ƭ **OptArg**: _unknown_

CLI option's argument.

Defined in: [src/interfaces/opt_map.ts:14](https://github.com/prasadrajandran/node-getopts/blob/c78e9e9/src/interfaces/opt_map.ts#L14)

---

### OptLongName

Ƭ **OptLongName**: _string_

A CLI option's long name.

Defined in: [src/interfaces/opt_map.ts:9](https://github.com/prasadrajandran/node-getopts/blob/c78e9e9/src/interfaces/opt_map.ts#L9)

---

### OptMap

Ƭ **OptMap**: _Map_<[_OptName_](interfaces_opt_map.md#optname) \| [_OptLongName_](interfaces_opt_map.md#optlongname), [_OptArg_](interfaces_opt_map.md#optarg)\>

Map of a CLI option to its argument.

Notes:

- If the CLI option does not accept an argument, its argument value will set
  to undefined.
- If the argument is optional and an argument wasn't provided, the argument
  value will be undefined.

Defined in: [src/interfaces/opt_map.ts:25](https://github.com/prasadrajandran/node-getopts/blob/c78e9e9/src/interfaces/opt_map.ts#L25)

---

### OptName

Ƭ **OptName**: _string_

A CLI option's name.

Defined in: [src/interfaces/opt_map.ts:4](https://github.com/prasadrajandran/node-getopts/blob/c78e9e9/src/interfaces/opt_map.ts#L4)
