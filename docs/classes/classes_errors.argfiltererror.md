[getopts - v2.0.0](../README.md) / [classes/errors](../modules/classes_errors.md) / ArgFilterError

# Class: ArgFilterError

[classes/errors](../modules/classes_errors.md).ArgFilterError

## Hierarchy

- [`ParserError`](classes_errors.ParserError.md)

  ↳ **`ArgFilterError`**

## Table of contents

### Constructors

- [constructor](classes_errors.ArgFilterError.md#constructor)

### Properties

- [details](classes_errors.ArgFilterError.md#details)
- [message](classes_errors.ArgFilterError.md#message)
- [name](classes_errors.ArgFilterError.md#name)
- [stack](classes_errors.ArgFilterError.md#stack)
- [prepareStackTrace](classes_errors.ArgFilterError.md#preparestacktrace)
- [stackTraceLimit](classes_errors.ArgFilterError.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.ArgFilterError.md#capturestacktrace)

## Constructors

### constructor

• **new ArgFilterError**(`arg`, `argFilter`, `argFilterError`)

CLI argument filter error.

#### Parameters

| Name             | Type                                                        | Description                                             |
| :--------------- | :---------------------------------------------------------- | :------------------------------------------------------ |
| `arg`            | `string`                                                    | CLI argument value.                                     |
| `argFilter`      | [`ArgFilter`](../interfaces/interfaces_schema.ArgFilter.md) | CLI argument's filter that threw the exception.         |
| `argFilterError` | `unknown`                                                   | Exception that was thrown by the CLI argument's filter. |

#### Overrides

[ParserError](classes_errors.ParserError.md).[constructor](classes_errors.ParserError.md#constructor)

#### Defined in

[src/classes/errors.ts:87](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/classes/errors.ts#L87)

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

• **name**: `string` = `'ArgFilterError'`

#### Overrides

[ParserError](classes_errors.ParserError.md).[name](classes_errors.ParserError.md#name)

#### Defined in

[src/classes/errors.ts:78](https://github.com/prasadrajandran/node-getopts/blob/f04388b/src/classes/errors.ts#L78)

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
