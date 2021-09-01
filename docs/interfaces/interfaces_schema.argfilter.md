[getopts - v3.1.0](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / ArgFilter

# Interface: ArgFilter

[interfaces/schema](../modules/interfaces_schema.md).ArgFilter

Callback function to filter CLI argument(s).

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

[src/interfaces/schema.ts:12](https://github.com/prasadrajandran/node-getopts/blob/ff39d95/src/interfaces/schema.ts#L12)
