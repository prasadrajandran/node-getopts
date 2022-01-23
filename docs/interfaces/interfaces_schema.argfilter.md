[getopts - v4.0.1](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / ArgFilter

# Interface: ArgFilter

[interfaces/schema](../modules/interfaces_schema.md).ArgFilter

## Callable

### ArgFilter

▸ **ArgFilter**(`arg`, `pos`): `unknown`

Callback function to filter CLI argument(s).

#### Parameters

| Name  | Type     | Description                                                                 |
| :---- | :------- | :-------------------------------------------------------------------------- |
| `arg` | `string` | Argument value.                                                             |
| `pos` | `number` | Position of the argument. Starts from 0. E.g. someutility arg0 arg1 arg2... |

#### Returns

`unknown`

#### Defined in

[src/interfaces/schema.ts:12](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/interfaces/schema.ts#L12)
