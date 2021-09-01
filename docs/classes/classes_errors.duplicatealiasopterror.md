[getopts - v3.1.0](../README.md) / [classes/errors](../modules/classes_errors.md) / DuplicateAliasOptError

# Class: DuplicateAliasOptError

[classes/errors](../modules/classes_errors.md).DuplicateAliasOptError

## Hierarchy

- [`ParserError`](classes_errors.ParserError.md)

  ↳ **`DuplicateAliasOptError`**

## Table of contents

### Constructors

- [constructor](classes_errors.DuplicateAliasOptError.md#constructor)

### Properties

- [details](classes_errors.DuplicateAliasOptError.md#details)
- [message](classes_errors.DuplicateAliasOptError.md#message)
- [name](classes_errors.DuplicateAliasOptError.md#name)
- [stack](classes_errors.DuplicateAliasOptError.md#stack)
- [prepareStackTrace](classes_errors.DuplicateAliasOptError.md#preparestacktrace)
- [stackTraceLimit](classes_errors.DuplicateAliasOptError.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.DuplicateAliasOptError.md#capturestacktrace)

## Constructors

### constructor

• **new DuplicateAliasOptError**(`parsedOpt`, `aliasOpt`)

Duplicate alias CLI option error.

#### Parameters

| Name        | Type     | Description             |
| :---------- | :------- | :---------------------- |
| `parsedOpt` | `string` | Option that was parsed. |
| `aliasOpt`  | `string` | Alias of parsed option. |

#### Overrides

[ParserError](classes_errors.ParserError.md).[constructor](classes_errors.ParserError.md#constructor)

#### Defined in

[src/classes/errors.ts:214](https://github.com/prasadrajandran/node-getopts/blob/ff39d95/src/classes/errors.ts#L214)

## Properties

### details

• **details**: `Map`<`string`, `unknown`\>

Additional error data.

#### Inherited from

[ParserError](classes_errors.ParserError.md).[details](classes_errors.ParserError.md#details)

#### Defined in

[src/classes/errors.ts:16](https://github.com/prasadrajandran/node-getopts/blob/ff39d95/src/classes/errors.ts#L16)

---

### message

• **message**: `string`

#### Inherited from

[ParserError](classes_errors.ParserError.md).[message](classes_errors.ParserError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: `string` = `'DuplicateAliasOptError'`

#### Overrides

[ParserError](classes_errors.ParserError.md).[name](classes_errors.ParserError.md#name)

#### Defined in

[src/classes/errors.ts:207](https://github.com/prasadrajandran/node-getopts/blob/ff39d95/src/classes/errors.ts#L207)

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

[ParserError](classes_errors.ParserError.md).[stack](classes_errors.ParserError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

---

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name          | Type         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[ParserError](classes_errors.ParserError.md).[prepareStackTrace](classes_errors.ParserError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[ParserError](classes_errors.ParserError.md).[stackTraceLimit](classes_errors.ParserError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[ParserError](classes_errors.ParserError.md).[captureStackTrace](classes_errors.ParserError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4
