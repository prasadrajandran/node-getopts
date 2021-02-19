[getopts - v1.0.0-alpha.1](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / ArgFilter

# Interface: ArgFilter

[interfaces/schema](../modules/interfaces_schema.md).ArgFilter

Callback to filter argument(s).

## Callable

▸ **ArgFilter**(`arg`: _string_, `pos`: _number_): _unknown_

Callback to filter argument(s).

#### Parameters:

| Name  | Type     | Description                                                                 |
| :---- | :------- | :-------------------------------------------------------------------------- |
| `arg` | _string_ | Argument value.                                                             |
| `pos` | _number_ | Position of the argument. Starts from 0. E.g. someutility arg0 arg1 arg2... |

**Returns:** _unknown_

Defined in: [interfaces/schema.ts:4](https://github.com/prasadrajandran/node-getopts/blob/63a95d9/src/interfaces/schema.ts#L4)
