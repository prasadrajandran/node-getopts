[getopts - v4.0.0](../README.md) / [classes/parser_errors](../modules/classes_parser_errors.md) / CmdExpectedError

# Class: CmdExpectedError

[classes/parser_errors](../modules/classes_parser_errors.md).CmdExpectedError

## Hierarchy

- [`ParserError`](classes_parser_errors.ParserError.md)<[`CmdExpectedErrorDetails`](../interfaces/interfaces_parser_error_details.CmdExpectedErrorDetails.md)\>

  ↳ **`CmdExpectedError`**

## Table of contents

### Constructors

- [constructor](classes_parser_errors.CmdExpectedError.md#constructor)

### Properties

- [details](classes_parser_errors.CmdExpectedError.md#details)
- [message](classes_parser_errors.CmdExpectedError.md#message)
- [name](classes_parser_errors.CmdExpectedError.md#name)
- [stack](classes_parser_errors.CmdExpectedError.md#stack)
- [prepareStackTrace](classes_parser_errors.CmdExpectedError.md#preparestacktrace)
- [stackTraceLimit](classes_parser_errors.CmdExpectedError.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_parser_errors.CmdExpectedError.md#capturestacktrace)

## Constructors

### constructor

• **new CmdExpectedError**(`details`)

Construct a new parser error.

#### Parameters

| Name      | Type                                                                                                  |
| :-------- | :---------------------------------------------------------------------------------------------------- |
| `details` | [`CmdExpectedErrorDetails`](../interfaces/interfaces_parser_error_details.CmdExpectedErrorDetails.md) |

#### Overrides

[ParserError](classes_parser_errors.ParserError.md).[constructor](classes_parser_errors.ParserError.md#constructor)

#### Defined in

[src/classes/parser_errors.ts:122](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/classes/parser_errors.ts#L122)

## Properties

### details

• **details**: [`CmdExpectedErrorDetails`](../interfaces/interfaces_parser_error_details.CmdExpectedErrorDetails.md)

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

• **name**: `string` = `'CmdExpectedError'`

#### Overrides

[ParserError](classes_parser_errors.ParserError.md).[name](classes_parser_errors.ParserError.md#name)

#### Defined in

[src/classes/parser_errors.ts:121](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/classes/parser_errors.ts#L121)

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
