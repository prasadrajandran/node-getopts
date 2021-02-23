[getopts - v1.0.0-alpha.4](../README.md) / interfaces/opt_map

# Module: interfaces/opt_map

## Table of contents

### Type aliases

- [OptArg](interfaces_opt_map.md#optarg)
- [OptMap](interfaces_opt_map.md#optmap)

## Type aliases

### OptArg

Ƭ **OptArg**: _unknown_

CLI option's argument.

Defined in: [src/interfaces/opt_map.ts:6](https://github.com/prasadrajandran/node-getopts/blob/62e4ad2/src/interfaces/opt_map.ts#L6)

---

### OptMap

Ƭ **OptMap**: _Map_<[_OptName_](interfaces_config.md#optname) \| [_OptLongName_](interfaces_config.md#optlongname), [_OptArg_](interfaces_opt_map.md#optarg)\>

Map of a CLI option to its argument.

Notes:

- If the CLI option does not accept an argument, its argument value will set
  to undefined.
- If the argument is optional and an argument wasn't provided, the argument
  value will be undefined.

Defined in: [src/interfaces/opt_map.ts:17](https://github.com/prasadrajandran/node-getopts/blob/62e4ad2/src/interfaces/opt_map.ts#L17)
