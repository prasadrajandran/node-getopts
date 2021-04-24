[getopts - v1.0.0](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / ArgFilter

# Interface: ArgFilter

[interfaces/schema](../modules/interfaces_schema.md).ArgFilter

Callback function to filter CLI argument(s).

## Callable

▸ **ArgFilter**(`arg`: _string_, `pos`: _number_): _unknown_

Callback function to filter CLI argument(s).

#### Parameters:

| Name  | Type     | Description                                                                 |
| :---- | :------- | :-------------------------------------------------------------------------- |
| `arg` | _string_ | Argument value.                                                             |
| `pos` | _number_ | Position of the argument. Starts from 0. E.g. someutility arg0 arg1 arg2... |

**Returns:** _unknown_

Defined in: [src/interfaces/schema.ts:4](https://github.com/prasadrajandran/node-getopts/blob/c78e9e9/src/interfaces/schema.ts#L4)
