[getopts - v2.0.0](../README.md) / [classes/errors](../modules/classes_errors.md) / UnknownCmdError

# Class: UnknownCmdError

[classes/errors](../modules/classes_errors.md).UnknownCmdError

## Hierarchy

- [`ParserError`](classes_errors.ParserError.md)

  ↳ **`UnknownCmdError`**

## Table of contents

### Constructors

- [constructor](classes_errors.UnknownCmdError.md#constructor)

### Properties

- [details](classes_errors.UnknownCmdError.md#details)
- [message](classes_errors.UnknownCmdError.md#message)
- [name](classes_errors.UnknownCmdError.md#name)
- [stack](classes_errors.UnknownCmdError.md#stack)
- [prepareStackTrace](classes_errors.UnknownCmdError.md#preparestacktrace)
- [stackTraceLimit](classes_errors.UnknownCmdError.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.UnknownCmdError.md#capturestacktrace)

## Constructors

### constructor

• **new UnknownCmdError**(`unknownCmd`, `expectedCmds`)

Unknown CLI command error.

#### Parameters

| Name           | Type       | Description                      |
| :------------- | :--------- | :------------------------------- |
| `unknownCmd`   | `string`   | Name of the unknown CLI command. |
| `expectedCmds` | `string`[] | CLI commands that were expected. |

#### Overrides

[ParserError](classes_errors.ParserError.md).[constructor](classes_errors.ParserError.md#constructor)

#### Defined in

[src/classes/errors.ts:38](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/classes/errors.ts#L38)

## Properties

### details

• **details**: `Map`<`string`, `unknown`\>

Additional error data.

#### Inherited from

[ParserError](classes_errors.ParserError.md).[details](classes_errors.ParserError.md#details)

#### Defined in

[src/classes/errors.ts:14](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/classes/errors.ts#L14)

---

### message

• **message**: `string`

#### Inherited from

[ParserError](classes_errors.ParserError.md).[message](classes_errors.ParserError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: `string` = `'UnknownCmdError'`

#### Overrides

[ParserError](classes_errors.ParserError.md).[name](classes_errors.ParserError.md#name)

#### Defined in

[src/classes/errors.ts:31](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/classes/errors.ts#L31)

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
