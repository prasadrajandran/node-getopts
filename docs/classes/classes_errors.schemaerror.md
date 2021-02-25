[getopts - v1.0.0-alpha.5](../README.md) / [classes/errors](../modules/classes_errors.md) / SchemaError

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

Defined in: node_modules/typescript/lib/lib.es5.d.ts:978

## Properties

### message

• **message**: _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'SchemaError'

Defined in: [src/classes/errors.ts:4](https://github.com/prasadrajandran/node-getopts/blob/8cf4bad/src/classes/errors.ts#L4)

---

### stack

• `Optional` **stack**: _undefined_ \| _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

---

### prepareStackTrace

▪ `Optional` `Static` **prepareStackTrace**: _undefined_ \| (`err`: Error, `stackTraces`: CallSite[]) => _any_

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

Defined in: node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: _number_

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

Defined in: node_modules/@types/node/globals.d.ts:4
