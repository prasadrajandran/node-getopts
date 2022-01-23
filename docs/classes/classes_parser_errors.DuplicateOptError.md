[getopts - v4.0.1](../README.md) / [classes/parser_errors](../modules/classes_parser_errors.md) / DuplicateOptError

# Class: DuplicateOptError

[classes/parser_errors](../modules/classes_parser_errors.md).DuplicateOptError

## Hierarchy

- [`ParserError`](classes_parser_errors.ParserError.md)<[`DuplicateOptErrorDetails`](../interfaces/interfaces_parser_error_details.DuplicateOptErrorDetails.md)\>

  ↳ **`DuplicateOptError`**

## Table of contents

### Constructors

- [constructor](classes_parser_errors.DuplicateOptError.md#constructor)

### Properties

- [details](classes_parser_errors.DuplicateOptError.md#details)
- [message](classes_parser_errors.DuplicateOptError.md#message)
- [name](classes_parser_errors.DuplicateOptError.md#name)
- [stack](classes_parser_errors.DuplicateOptError.md#stack)
- [prepareStackTrace](classes_parser_errors.DuplicateOptError.md#preparestacktrace)
- [stackTraceLimit](classes_parser_errors.DuplicateOptError.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_parser_errors.DuplicateOptError.md#capturestacktrace)

## Constructors

### constructor

• **new DuplicateOptError**(`details`)

Construct a new parser error.

#### Parameters

| Name      | Type                                                                                                    |
| :-------- | :------------------------------------------------------------------------------------------------------ |
| `details` | [`DuplicateOptErrorDetails`](../interfaces/interfaces_parser_error_details.DuplicateOptErrorDetails.md) |

#### Overrides

[ParserError](classes_parser_errors.ParserError.md).[constructor](classes_parser_errors.ParserError.md#constructor)

#### Defined in

[src/classes/parser_errors.ts:129](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/classes/parser_errors.ts#L129)

## Properties

### details

• **details**: [`DuplicateOptErrorDetails`](../interfaces/interfaces_parser_error_details.DuplicateOptErrorDetails.md)

Additional error data.

#### Inherited from

[ParserError](classes_parser_errors.ParserError.md).[details](classes_parser_errors.ParserError.md#details)

#### Defined in

[src/classes/parser_errors.ts:23](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/classes/parser_errors.ts#L23)

---

### message

• **message**: `string`

#### Inherited from

[ParserError](classes_parser_errors.ParserError.md).[message](classes_parser_errors.ParserError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

---

### name

• **name**: `string` = `'DuplicateOptError'`

#### Overrides

[ParserError](classes_parser_errors.ParserError.md).[name](classes_parser_errors.ParserError.md#name)

#### Defined in

[src/classes/parser_errors.ts:128](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/classes/parser_errors.ts#L128)

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

[ParserError](classes_parser_errors.ParserError.md).[stack](classes_parser_errors.ParserError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

---

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

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
