[getopts - v4.0.0](../README.md) / [classes/schema_error](../modules/classes_schema_error.md) / SchemaError

# Class: SchemaError

[classes/schema_error](../modules/classes_schema_error.md).SchemaError

**`internal`**

## Hierarchy

- `Error`

  ↳ **`SchemaError`**

## Table of contents

### Constructors

- [constructor](classes_schema_error.SchemaError.md#constructor)

### Properties

- [message](classes_schema_error.SchemaError.md#message)
- [name](classes_schema_error.SchemaError.md#name)
- [stack](classes_schema_error.SchemaError.md#stack)
- [prepareStackTrace](classes_schema_error.SchemaError.md#preparestacktrace)
- [stackTraceLimit](classes_schema_error.SchemaError.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_schema_error.SchemaError.md#capturestacktrace)

## Constructors

### constructor

• **new SchemaError**(`message?`)

Schema Error.

#### Parameters

| Name       | Type     | Description           |
| :--------- | :------- | :-------------------- |
| `message?` | `string` | Schema error message. |

#### Overrides

Error.constructor

#### Defined in

[src/classes/schema_error.ts:10](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/classes/schema_error.ts#L10)

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

[src/classes/schema_error.ts:5](https://github.com/prasadrajandran/node-getopts/blob/09d8331/src/classes/schema_error.ts#L5)

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
