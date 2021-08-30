[getopts - v3.0.0](../README.md) / [classes/errors](../modules/classes_errors.md) / ExcessArgsError

# Class: ExcessArgsError

[classes/errors](../modules/classes_errors.md).ExcessArgsError

## Hierarchy

- [`ParserError`](classes_errors.ParserError.md)

  ↳ **`ExcessArgsError`**

## Table of contents

### Constructors

- [constructor](classes_errors.ExcessArgsError.md#constructor)

### Properties

- [details](classes_errors.ExcessArgsError.md#details)
- [message](classes_errors.ExcessArgsError.md#message)
- [name](classes_errors.ExcessArgsError.md#name)
- [stack](classes_errors.ExcessArgsError.md#stack)
- [prepareStackTrace](classes_errors.ExcessArgsError.md#preparestacktrace)
- [stackTraceLimit](classes_errors.ExcessArgsError.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.ExcessArgsError.md#capturestacktrace)

## Constructors

### constructor

• **new ExcessArgsError**(`excessArgs`, `numArgsReceived`, `maxArgsExpected`)

Excess CLI arguments error.

#### Parameters

| Name              | Type       | Description                                      |
| :---------------- | :--------- | :----------------------------------------------- |
| `excessArgs`      | `string`[] | The excess CLI arguments.                        |
| `numArgsReceived` | `number`   | The total number of arguments the CLI received.  |
| `maxArgsExpected` | `number`   | The maximum number of arguments the CLI accepts. |

#### Overrides

[ParserError](classes_errors.ParserError.md).[constructor](classes_errors.ParserError.md#constructor)

#### Defined in

[src/classes/errors.ts:148](https://github.com/prasadrajandran/node-getopts/blob/43d0c83/src/classes/errors.ts#L148)

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

• **name**: `string` = `'ExcessArgsError'`

#### Overrides

[ParserError](classes_errors.ParserError.md).[name](classes_errors.ParserError.md#name)

#### Defined in

[src/classes/errors.ts:140](https://github.com/prasadrajandran/node-getopts/blob/43d0c83/src/classes/errors.ts#L140)

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
