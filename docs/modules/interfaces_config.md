[ngetopts](../README.md) / interfaces/config

# Module: interfaces/config

## Table of contents

### Interfaces

- [Config](../interfaces/interfaces_config.config.md)
- [OptConfig](../interfaces/interfaces_config.optconfig.md)

### Type aliases

- [CmdConfigMap](interfaces_config.md#cmdconfigmap)
- [CmdName](interfaces_config.md#cmdname)
- [OptConfigMap](interfaces_config.md#optconfigmap)
- [OptLongName](interfaces_config.md#optlongname)
- [OptName](interfaces_config.md#optname)

## Type aliases

### CmdConfigMap

Ƭ **CmdConfigMap**: _Map_<[_CmdName_](interfaces_config.md#cmdname), [_Config_](../interfaces/interfaces_config.config.md)\>

Map of an command's name to its configuration object.

Defined in: [interfaces/config.ts:44](https://github.com/prasadrajandran/ngetopts/blob/41ceb2b/src/interfaces/config.ts#L44)

---

### CmdName

Ƭ **CmdName**: _string_

Command's name.

Defined in: [interfaces/config.ts:39](https://github.com/prasadrajandran/ngetopts/blob/41ceb2b/src/interfaces/config.ts#L39)

---

### OptConfigMap

Ƭ **OptConfigMap**: _Map_<[_OptName_](interfaces_config.md#optname) \| [_OptLongName_](interfaces_config.md#optlongname), [_OptConfig_](../interfaces/interfaces_config.optconfig.md)\>

Map of an option's name to its configuration object.

Defined in: [interfaces/config.ts:34](https://github.com/prasadrajandran/ngetopts/blob/41ceb2b/src/interfaces/config.ts#L34)

---

### OptLongName

Ƭ **OptLongName**: _string_

An option's long name.

Defined in: [interfaces/config.ts:11](https://github.com/prasadrajandran/ngetopts/blob/41ceb2b/src/interfaces/config.ts#L11)

---

### OptName

Ƭ **OptName**: _string_

An option's name.

Defined in: [interfaces/config.ts:6](https://github.com/prasadrajandran/ngetopts/blob/41ceb2b/src/interfaces/config.ts#L6)
