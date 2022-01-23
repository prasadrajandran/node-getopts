[getopts - v4.0.1](../README.md) / [classes/parser_errors](../modules/classes_parser_errors.md) / ParserError

# Class: ParserError<T\>

[classes/parser_errors](../modules/classes_parser_errors.md).ParserError

**`internal`**

## Type parameters

| Name |
| :--- |
| `T`  |

## Hierarchy

- `Error`

  ↳ **`ParserError`**

  ↳↳ [`UnknownOptError`](classes_parser_errors.UnknownOptError.md)

  ↳↳ [`UnknownCmdError`](classes_parser_errors.UnknownCmdError.md)

  ↳↳ [`OptMissingArgError`](classes_parser_errors.OptMissingArgError.md)

  ↳↳ [`UnexpectedOptArgError`](classes_parser_errors.UnexpectedOptArgError.md)

  ↳↳ [`ArgFilterError`](classes_parser_errors.ArgFilterError.md)

  ↳↳ [`OptArgFilterError`](classes_parser_errors.OptArgFilterError.md)

  ↳↳ [`ExcessArgsError`](classes_parser_errors.ExcessArgsError.md)

  ↳↳ [`InsufficientArgsError`](classes_parser_errors.InsufficientArgsError.md)

  ↳↳ [`CmdExpectedError`](classes_parser_errors.CmdExpectedError.md)

  ↳↳ [`DuplicateOptError`](classes_parser_errors.DuplicateOptError.md)

  ↳↳ [`DuplicateAliasOptError`](classes_parser_errors.DuplicateAliasOptError.md)

## Table of contents

### Constructors

- [constructor](classes_parser_errors.ParserError.md#constructor)

### Properties

- [details](classes_parser_errors.ParserError.md#details)
- [message](classes_parser_errors.ParserError.md#message)
- [name](classes_parser_errors.ParserError.md#name)
- [stack](classes_parser_errors.ParserError.md#stack)
- [prepareStackTrace](classes_parser_errors.ParserError.md#preparestacktrace)
- [stackTraceLimit](classes_parser_errors.ParserError.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_parser_errors.ParserError.md#capturestacktrace)

## Constructors

### constructor

• **new ParserError**<`T`\>(`message`, `details`)

Construct a new parser error.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `message` | `string` | Error message.         |
| `details` | `T`      | Additional error data. |

#### Overrides

Error.constructor

#### Defined in

[src/classes/parser_errors.ts:30](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/classes/parser_errors.ts#L30)

## Properties

### details

• **details**: `T`

Additional error data.

#### Defined in

[src/classes/parser_errors.ts:23](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/classes/parser_errors.ts#L23)

---

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

---

### name

• **name**: `string` = `'ParserError'`

#### Overrides

Error.name

#### Defined in

[src/classes/parser_errors.ts:19](https://github.com/prasadrajandran/node-getopts/blob/6df82cf/src/classes/parser_errors.ts#L19)

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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
