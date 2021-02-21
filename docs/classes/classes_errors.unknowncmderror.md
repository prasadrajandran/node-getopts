[getopts - v1.0.0-alpha.3](../README.md) / [classes/errors](../modules/classes_errors.md) / UnknownCmdError

# Class: UnknownCmdError

[classes/errors](../modules/classes_errors.md).UnknownCmdError

## Hierarchy

- _Error_

  ↳ **UnknownCmdError**

## Table of contents

### Constructors

- [constructor](classes_errors.unknowncmderror.md#constructor)

### Properties

- [message](classes_errors.unknowncmderror.md#message)
- [name](classes_errors.unknowncmderror.md#name)
- [prepareStackTrace](classes_errors.unknowncmderror.md#preparestacktrace)
- [stack](classes_errors.unknowncmderror.md#stack)
- [stackTraceLimit](classes_errors.unknowncmderror.md#stacktracelimit)
- [unknownCmd](classes_errors.unknowncmderror.md#unknowncmd)

### Methods

- [captureStackTrace](classes_errors.unknowncmderror.md#capturestacktrace)

## Constructors

### constructor

\+ **new UnknownCmdError**(`message`: _string_, `unknownCmd`: _string_): [_UnknownCmdError_](classes_errors.unknowncmderror.md)

Unknown CLI command error.

#### Parameters:

| Name         | Type     | Description                      |
| :----------- | :------- | :------------------------------- |
| `message`    | _string_ | Error message.                   |
| `unknownCmd` | _string_ | Name of the unknown CLI command. |

**Returns:** [_UnknownCmdError_](classes_errors.unknowncmderror.md)

Defined in: [src/classes/errors.ts:30](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/classes/errors.ts#L30)

## Properties

### message

• **message**: _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'UnknownCmdError'

Defined in: [src/classes/errors.ts:26](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/classes/errors.ts#L26)

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

### unknownCmd

• **unknownCmd**: _string_

Name of the unknown CLI command

Defined in: [src/classes/errors.ts:30](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/classes/errors.ts#L30)

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
