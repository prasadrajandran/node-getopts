[getopts - v3.1.0](../README.md) / [classes/errors](../modules/classes_errors.md) / SchemaError

# Class: SchemaError

[classes/errors](../modules/classes_errors.md).SchemaError

**`internal`**

## Hierarchy

- `Error`

  ↳ **`SchemaError`**

## Table of contents

### Constructors

- [constructor](classes_errors.SchemaError.md#constructor)

### Properties

- [message](classes_errors.SchemaError.md#message)
- [name](classes_errors.SchemaError.md#name)
- [stack](classes_errors.SchemaError.md#stack)
- [prepareStackTrace](classes_errors.SchemaError.md#preparestacktrace)
- [stackTraceLimit](classes_errors.SchemaError.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.SchemaError.md#capturestacktrace)

## Constructors

### constructor

• **new SchemaError**(`message?`)

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message?` | `string` |

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:979

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: `string` = `'SchemaError'`

#### Overrides

Error.name

#### Defined in

[src/classes/errors.ts:8](https://github.com/prasadrajandran/node-getopts/blob/ff39d95/src/classes/errors.ts#L8)

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
