[getopts - v1.0.0-alpha.6](../README.md) / [classes/errors](../modules/classes_errors.md) / UnknownOptError

# Class: UnknownOptError

[classes/errors](../modules/classes_errors.md).UnknownOptError

## Hierarchy

- _Error_

  ↳ **UnknownOptError**

## Table of contents

### Constructors

- [constructor](classes_errors.unknownopterror.md#constructor)

### Properties

- [message](classes_errors.unknownopterror.md#message)
- [name](classes_errors.unknownopterror.md#name)
- [prepareStackTrace](classes_errors.unknownopterror.md#preparestacktrace)
- [stack](classes_errors.unknownopterror.md#stack)
- [stackTraceLimit](classes_errors.unknownopterror.md#stacktracelimit)
- [unknownOpt](classes_errors.unknownopterror.md#unknownopt)

### Methods

- [captureStackTrace](classes_errors.unknownopterror.md#capturestacktrace)

## Constructors

### constructor

\+ **new UnknownOptError**(`message`: _string_, `unknownOpt`: _string_): [_UnknownOptError_](classes_errors.unknownopterror.md)

Unknown CLI option error.

#### Parameters:

| Name         | Type     | Description                     |
| :----------- | :------- | :------------------------------ |
| `message`    | _string_ | Error message.                  |
| `unknownOpt` | _string_ | Name of the unknown CLI option. |

**Returns:** [_UnknownOptError_](classes_errors.unknownopterror.md)

Defined in: [src/classes/errors.ts:12](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L12)

## Properties

### message

• **message**: _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'UnknownOptError'

Defined in: [src/classes/errors.ts:8](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L8)

---

### prepareStackTrace

• `Optional` **prepareStackTrace**: _undefined_ \| (`err`: Error, `stackTraces`: CallSite[]) => _any_

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

Defined in: node_modules/@types/node/globals.d.ts:11

---

### stack

• `Optional` **stack**: _undefined_ \| _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

---

### stackTraceLimit

• **stackTraceLimit**: _number_

Defined in: node_modules/@types/node/globals.d.ts:13

---

### unknownOpt

• **unknownOpt**: _string_

Name of the unknown CLI option.

Defined in: [src/classes/errors.ts:12](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L12)

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`: _object_, `constructorOpt?`: Function): _void_

Create .stack property on a target object

#### Parameters:

| Name              | Type     |
| :---------------- | :------- |
| `targetObject`    | _object_ |
| `constructorOpt?` | Function |

**Returns:** _void_

Defined in: node_modules/@types/node/globals.d.ts:4
