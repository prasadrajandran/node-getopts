[getopts - v1.0.0-beta.3](../README.md) / [classes/errors](../modules/classes_errors.md) / SchemaError

# Class: SchemaError

[classes/errors](../modules/classes_errors.md).SchemaError

## Hierarchy

- _Error_

  ↳ **SchemaError**

## Table of contents

### Constructors

- [constructor](classes_errors.schemaerror.md#constructor)

### Properties

- [message](classes_errors.schemaerror.md#message)
- [name](classes_errors.schemaerror.md#name)
- [stack](classes_errors.schemaerror.md#stack)
- [prepareStackTrace](classes_errors.schemaerror.md#preparestacktrace)
- [stackTraceLimit](classes_errors.schemaerror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.schemaerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new SchemaError**(`message?`: _string_): [_SchemaError_](classes_errors.schemaerror.md)

#### Parameters:

| Name       | Type     |
| :--------- | :------- |
| `message?` | _string_ |

**Returns:** [_SchemaError_](classes_errors.schemaerror.md)

Inherited from: Error.constructor

Defined in: node_modules/typescript/lib/lib.es5.d.ts:978

## Properties

### message

• **message**: _string_

Inherited from: Error.message

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'SchemaError'

Overrides: Error.name

Defined in: [src/classes/errors.ts:6](https://github.com/prasadrajandran/node-getopts/blob/11bb392/src/classes/errors.ts#L6)

---

### stack

• `Optional` **stack**: _string_

Inherited from: Error.stack

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

---

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => _any_

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration:

▸ (`err`: Error, `stackTraces`: CallSite[]): _any_

#### Parameters:

| Name          | Type       |
| :------------ | :--------- |
| `err`         | Error      |
| `stackTraces` | CallSite[] |

**Returns:** _any_

Defined in: node_modules/@types/node/globals.d.ts:11

Inherited from: Error.prepareStackTrace

Defined in: node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: _number_

Inherited from: Error.stackTraceLimit

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static`**captureStackTrace**(`targetObject`: _object_, `constructorOpt?`: Function): _void_

Create .stack property on a target object

#### Parameters:

| Name              | Type     |
| :---------------- | :------- |
| `targetObject`    | _object_ |
| `constructorOpt?` | Function |

**Returns:** _void_

Inherited from: Error.captureStackTrace

Defined in: node_modules/@types/node/globals.d.ts:4
