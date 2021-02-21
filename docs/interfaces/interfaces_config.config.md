[getopts - v1.0.0-alpha.3](../README.md) / [interfaces/config](../modules/interfaces_config.md) / Config

# Interface: Config

[interfaces/config](../modules/interfaces_config.md).Config

CLI config.

## Table of contents

### Properties

- [argFilter](interfaces_config.config.md#argfilter)
- [cmds](interfaces_config.config.md#cmds)
- [expectsCmd](interfaces_config.config.md#expectscmd)
- [maxArgs](interfaces_config.config.md#maxargs)
- [minArgs](interfaces_config.config.md#minargs)
- [opts](interfaces_config.config.md#opts)

## Properties

### argFilter

• **argFilter**: [_ArgFilter_](interfaces_schema.argfilter.md)

CLI argument filter (CLI commands are excluded).

Defined in: [src/interfaces/config.ts:78](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/config.ts#L78)

---

### cmds

• **cmds**: [_CmdConfigMap_](../modules/interfaces_config.md#cmdconfigmap)

CLI command config map.

Defined in: [src/interfaces/config.ts:58](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/config.ts#L58)

---

### expectsCmd

• **expectsCmd**: _boolean_

Does the CLI expect commands or arguments?

Defined in: [src/interfaces/config.ts:82](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/config.ts#L82)

---

### maxArgs

• **maxArgs**: _number_

If CLI arguments are expected:

- Maximum number CLI arguments expected

If CLI commands are expected:

- Will be set to 1

Defined in: [src/interfaces/config.ts:74](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/config.ts#L74)

---

### minArgs

• **minArgs**: _number_

If CLI arguments are expected:

- Minimum number CLI arguments expected

If CLI commands are expected:

- Is the command optional (0) or required (1).

Defined in: [src/interfaces/config.ts:66](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/config.ts#L66)

---

### opts

• **opts**: [_OptConfigMap_](../modules/interfaces_config.md#optconfigmap)

CLI option config map.

Defined in: [src/interfaces/config.ts:54](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/interfaces/config.ts#L54)
