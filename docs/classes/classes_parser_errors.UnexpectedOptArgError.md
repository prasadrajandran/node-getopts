[getopts - v4.0.0](../README.md) / [classes/parser_errors](../modules/classes_parser_errors.md) / UnexpectedOptArgError

# Class: UnexpectedOptArgError

[classes/parser_errors](../modules/classes_parser_errors.md).UnexpectedOptArgError

## Hierarchy

- [`ParserError`](classes_parser_errors.ParserError.md)<[`UnexpectedOptArgErrorDetails`](../interfaces/interfaces_parser_error_details.UnexpectedOptArgErrorDetails.md)\>

  ↳ **`UnexpectedOptArgError`**

## Table of contents

### Constructors

- [constructor](classes_parser_errors.UnexpectedOptArgError.md#constructor)

### Properties

- [details](classes_parser_errors.UnexpectedOptArgError.md#details)
- [message](classes_parser_errors.UnexpectedOptArgError.md#message)
- [name](classes_parser_errors.UnexpectedOptArgError.md#name)
- [stack](classes_parser_errors.UnexpectedOptArgError.md#stack)
- [prepareStackTrace](classes_parser_errors.UnexpectedOptArgError.md#preparestacktrace)
- [stackTraceLimit](classes_parser_errors.UnexpectedOptArgError.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_parser_errors.UnexpectedOptArgError.md#capturestacktrace)

## Constructors

### constructor

• **new UnexpectedOptArgError**(`details`)

Construct a new parser error.

#### Parameters

| Name      | Type                                                                                                            |
| :-------- | :-------------------------------------------------------------------------------------------------------------- |
| `details` | [`UnexpectedOptArgErrorDetails`](../interfaces/interfaces_parser_error_details.UnexpectedOptArgErrorDetails.md) |

#### Overrides

[ParserError](classes_parser_errors.ParserError.md).[constructor](classes_parser_errors.ParserError.md#constructor)

#### Defined in

[src/classes/parser_errors.ts:59](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/classes/parser_errors.ts#L59)

## Properties

### details

• **details**: [`UnexpectedOptArgErrorDetails`](../interfaces/interfaces_parser_error_details.UnexpectedOptArgErrorDetails.md)

Additional error data.

#### Inherited from

[ParserError](classes_parser_errors.ParserError.md).[details](classes_parser_errors.ParserError.md#details)

#### Defined in

[src/classes/parser_errors.ts:23](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/classes/parser_errors.ts#L23)

---

### message

• **message**: `string`

#### Inherited from

[ParserError](classes_parser_errors.ParserError.md).[message](classes_parser_errors.ParserError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: `string` = `'UnexpectedOptArgError'`

#### Overrides

[ParserError](classes_parser_errors.ParserError.md).[name](classes_parser_errors.ParserError.md#name)

#### Defined in

[src/classes/parser_errors.ts:58](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/classes/parser_errors.ts#L58)

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

[ParserError](classes_parser_errors.ParserError.md).[stack](classes_parser_errors.ParserError.md#stack)

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

[ParserError](classes_parser_errors.ParserError.md).[prepareStackTrace](classes_parser_errors.ParserError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[ParserError](classes_parser_errors.ParserError.md).[stackTraceLimit](classes_parser_errors.ParserError.md#stacktracelimit)

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

[ParserError](classes_parser_errors.ParserError.md).[captureStackTrace](classes_parser_errors.ParserError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4
