[getopts - v3.0.0](../README.md) / [classes/errors](../modules/classes_errors.md) / UnknownOptError

# Class: UnknownOptError

[classes/errors](../modules/classes_errors.md).UnknownOptError

## Hierarchy

- [`ParserError`](classes_errors.ParserError.md)

  ↳ **`UnknownOptError`**

## Table of contents

### Constructors

- [constructor](classes_errors.UnknownOptError.md#constructor)

### Properties

- [details](classes_errors.UnknownOptError.md#details)
- [message](classes_errors.UnknownOptError.md#message)
- [name](classes_errors.UnknownOptError.md#name)
- [stack](classes_errors.UnknownOptError.md#stack)
- [prepareStackTrace](classes_errors.UnknownOptError.md#preparestacktrace)
- [stackTraceLimit](classes_errors.UnknownOptError.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.UnknownOptError.md#capturestacktrace)

## Constructors

### constructor

• **new UnknownOptError**(`unknownOpt`)

Unknown CLI option error.

#### Parameters

| Name         | Type     | Description                     |
| :----------- | :------- | :------------------------------ |
| `unknownOpt` | `string` | Name of the unknown CLI option. |

#### Overrides

[ParserError](classes_errors.ParserError.md).[constructor](classes_errors.ParserError.md#constructor)

#### Defined in

[src/classes/errors.ts:27](https://github.com/prasadrajandran/node-getopts/blob/43d0c83/src/classes/errors.ts#L27)

## Properties

### details

• **details**: `Map`<`string`, `unknown`\>

Additional error data.

#### Inherited from

[ParserError](classes_errors.ParserError.md).[details](classes_errors.ParserError.md#details)

#### Defined in

[src/classes/errors.ts:17](https://github.com/prasadrajandran/node-getopts/blob/43d0c83/src/classes/errors.ts#L17)

---

### message

• **message**: `string`

#### Inherited from

[ParserError](classes_errors.ParserError.md).[message](classes_errors.ParserError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: `string` = `'UnknownOptError'`

#### Overrides

[ParserError](classes_errors.ParserError.md).[name](classes_errors.ParserError.md#name)

#### Defined in

[src/classes/errors.ts:21](https://github.com/prasadrajandran/node-getopts/blob/43d0c83/src/classes/errors.ts#L21)

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
