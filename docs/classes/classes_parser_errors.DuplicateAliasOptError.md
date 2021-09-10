[getopts - v4.0.0](../README.md) / [classes/parser_errors](../modules/classes_parser_errors.md) / DuplicateAliasOptError

# Class: DuplicateAliasOptError

[classes/parser_errors](../modules/classes_parser_errors.md).DuplicateAliasOptError

## Hierarchy

- [`ParserError`](classes_parser_errors.ParserError.md)<[`DuplicateAliasOptErrorDetails`](../interfaces/interfaces_parser_error_details.DuplicateAliasOptErrorDetails.md)\>

  ↳ **`DuplicateAliasOptError`**

## Table of contents

### Constructors

- [constructor](classes_parser_errors.DuplicateAliasOptError.md#constructor)

### Properties

- [details](classes_parser_errors.DuplicateAliasOptError.md#details)
- [message](classes_parser_errors.DuplicateAliasOptError.md#message)
- [name](classes_parser_errors.DuplicateAliasOptError.md#name)
- [stack](classes_parser_errors.DuplicateAliasOptError.md#stack)
- [prepareStackTrace](classes_parser_errors.DuplicateAliasOptError.md#preparestacktrace)
- [stackTraceLimit](classes_parser_errors.DuplicateAliasOptError.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_parser_errors.DuplicateAliasOptError.md#capturestacktrace)

## Constructors

### constructor

• **new DuplicateAliasOptError**(`details`)

Construct a new parser error.

#### Parameters

| Name      | Type                                                                                                              |
| :-------- | :---------------------------------------------------------------------------------------------------------------- |
| `details` | [`DuplicateAliasOptErrorDetails`](../interfaces/interfaces_parser_error_details.DuplicateAliasOptErrorDetails.md) |

#### Overrides

[ParserError](classes_parser_errors.ParserError.md).[constructor](classes_parser_errors.ParserError.md#constructor)

#### Defined in

[src/classes/parser_errors.ts:136](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/classes/parser_errors.ts#L136)

## Properties

### details

• **details**: [`DuplicateAliasOptErrorDetails`](../interfaces/interfaces_parser_error_details.DuplicateAliasOptErrorDetails.md)

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

• **name**: `string` = `'DuplicateAliasOptError'`

#### Overrides

[ParserError](classes_parser_errors.ParserError.md).[name](classes_parser_errors.ParserError.md#name)

#### Defined in

[src/classes/parser_errors.ts:135](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/classes/parser_errors.ts#L135)

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
