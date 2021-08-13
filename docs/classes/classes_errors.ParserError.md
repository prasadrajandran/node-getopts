[getopts - v2.0.0](../README.md) / [classes/errors](../modules/classes_errors.md) / ParserError

# Class: ParserError

[classes/errors](../modules/classes_errors.md).ParserError

## Hierarchy

- `Error`

  ↳ **`ParserError`**

  ↳↳ [`UnknownOptError`](classes_errors.UnknownOptError.md)

  ↳↳ [`UnknownCmdError`](classes_errors.UnknownCmdError.md)

  ↳↳ [`OptMissingArgError`](classes_errors.OptMissingArgError.md)

  ↳↳ [`UnexpectedOptArgError`](classes_errors.UnexpectedOptArgError.md)

  ↳↳ [`ArgFilterError`](classes_errors.ArgFilterError.md)

  ↳↳ [`OptArgFilterError`](classes_errors.OptArgFilterError.md)

  ↳↳ [`ExcessArgsError`](classes_errors.ExcessArgsError.md)

  ↳↳ [`InsufficientArgsError`](classes_errors.InsufficientArgsError.md)

  ↳↳ [`CmdExpectedError`](classes_errors.CmdExpectedError.md)

  ↳↳ [`DuplicateOptError`](classes_errors.DuplicateOptError.md)

  ↳↳ [`DuplicateAliasOptError`](classes_errors.DuplicateAliasOptError.md)

## Table of contents

### Constructors

- [constructor](classes_errors.ParserError.md#constructor)

### Properties

- [details](classes_errors.ParserError.md#details)
- [message](classes_errors.ParserError.md#message)
- [name](classes_errors.ParserError.md#name)
- [stack](classes_errors.ParserError.md#stack)
- [prepareStackTrace](classes_errors.ParserError.md#preparestacktrace)
- [stackTraceLimit](classes_errors.ParserError.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.ParserError.md#capturestacktrace)

## Constructors

### constructor

• **new ParserError**(`message?`)

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message?` | `string` |

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:979

## Properties

### details

• **details**: `Map`<`string`, `unknown`\>

Additional error data.

#### Defined in

[src/classes/errors.ts:14](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/classes/errors.ts#L14)

---

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: `string` = `'ParserError'`

#### Overrides

Error.name

#### Defined in

[src/classes/errors.ts:10](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/classes/errors.ts#L10)

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

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

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
