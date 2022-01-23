[getopts - v4.0.1](../README.md) / [classes/opt_map](../modules/classes_opt_map.md) / OptMap

# Class: OptMap

[classes/opt_map](../modules/classes_opt_map.md).OptMap

Map of a CLI option to its argument.

## Hierarchy

- `Map`<[`OptName`](../modules/interfaces_parsed_input.md#optname) \| [`OptLongName`](../modules/interfaces_parsed_input.md#optlongname), `unknown`\>

  ↳ **`OptMap`**

## Table of contents

### Constructors

- [constructor](classes_opt_map.OptMap.md#constructor)

### Properties

- [[toStringTag]](classes_opt_map.OptMap.md#[tostringtag])
- [size](classes_opt_map.OptMap.md#size)
- [[species]](classes_opt_map.OptMap.md#[species])

### Methods

- [[iterator]](classes_opt_map.OptMap.md#[iterator])
- [clear](classes_opt_map.OptMap.md#clear)
- [delete](classes_opt_map.OptMap.md#delete)
- [entries](classes_opt_map.OptMap.md#entries)
- [forEach](classes_opt_map.OptMap.md#foreach)
- [get](classes_opt_map.OptMap.md#get)
- [has](classes_opt_map.OptMap.md#has)
- [keys](classes_opt_map.OptMap.md#keys)
- [set](classes_opt_map.OptMap.md#set)
- [values](classes_opt_map.OptMap.md#values)

## Constructors

### constructor

• **new OptMap**(`entries?`)

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `entries?` | `null` \| readonly readonly [`string`, `unknown`][] |

#### Inherited from

Map<OptName \| OptLongName, unknown\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:33

• **new OptMap**(`iterable`)

#### Parameters

| Name       | Type                                        |
| :--------- | :------------------------------------------ |
| `iterable` | `Iterable`<readonly [`string`, `unknown`]\> |

#### Inherited from

Map<OptName \| OptLongName, unknown\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:160

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag@131

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

---

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

---

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

Map.\_\_@species@122

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`string`, `unknown`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`string`, `unknown`]\>

#### Inherited from

Map.\_\_@iterator@99

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

---

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Map.clear

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:22

---

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

Map.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

---

### entries

▸ **entries**(): `IterableIterator`<[`string`, `unknown`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`string`, `unknown`]\>

#### Inherited from

Map.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

---

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name         | Type                                                                                |
| :----------- | :---------------------------------------------------------------------------------- |
| `callbackfn` | (`value`: `unknown`, `key`: `string`, `map`: `Map`<`string`, `unknown`\>) => `void` |
| `thisArg?`   | `any`                                                                               |

#### Returns

`void`

#### Inherited from

Map.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:24

---

### get

▸ **get**(`optName`, `defaultValue?`): `unknown`

Retrieve an option's argument.

#### Parameters

| Name            | Type                   | Description                                                                                                                                                      |
| :-------------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `optName`       | `string` \| `string`[] | Name of the option to retrieve. Also accepts an array of option names. The argument value of the first option that exists will returned if an array is provided. |
| `defaultValue?` | `unknown`              | This value will be returned instead if the option does not exist.                                                                                                |

#### Returns

`unknown`

If the option exists and accepts an argument, that argument will
be returned. If the option exists and does not accept an argument,
undefined will be returned instead. If the option does not exist,
the default value will be returned (and if that is not set, undefined
will be returned).

#### Overrides

Map.get

#### Defined in

[src/classes/opt_map.ts:20](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/classes/opt_map.ts#L20)

---

### has

▸ **has**(`optName`): `boolean`

Check if an option exists.

#### Parameters

| Name      | Type                   | Description                                                                                                                                      |
| :-------- | :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `optName` | `string` \| `string`[] | The name of the option. This also accepts an array of option names. If an array is provided, true is returned if any one of those options exist. |

#### Returns

`boolean`

#### Overrides

Map.has

#### Defined in

[src/classes/opt_map.ts:39](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/classes/opt_map.ts#L39)

---

### keys

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

Map.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

---

### set

▸ **set**(`key`, `value`): [`OptMap`](classes_opt_map.OptMap.md)

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `key`   | `string`  |
| `value` | `unknown` |

#### Returns

[`OptMap`](classes_opt_map.OptMap.md)

#### Inherited from

Map.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

---

### values

▸ **values**(): `IterableIterator`<`unknown`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<`unknown`\>

#### Inherited from

Map.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
