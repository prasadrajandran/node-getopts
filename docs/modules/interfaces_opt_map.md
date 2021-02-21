[getopts - v1.0.0-alpha.3](../README.md) / interfaces/opt_map

# Module: interfaces/opt_map

## Table of contents

### Type aliases

- [OptArg](interfaces_opt_map.md#optarg)
- [OptMap](interfaces_opt_map.md#optmap)

## Type aliases

### OptArg

Ƭ **OptArg**: _unknown_

CLI option's argument.

Defined in: [src/interfaces/opt_map.ts:6](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/opt_map.ts#L6)

---

### OptMap

Ƭ **OptMap**: _Map_<[_OptName_](interfaces_config.md#optname) \| [_OptLongName_](interfaces_config.md#optlongname), [_OptArg_](interfaces_opt_map.md#optarg)[]\>

Map of a CLI option's name to its arguments.

Note:

- It's mapped to an array because all CLI options are capable of receiving
  multiple arguments. This can be done by simply repeating the option.
  Example:
  someutility -n5 -n10 -n12 run

Defined in: [src/interfaces/opt_map.ts:17](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/opt_map.ts#L17)
