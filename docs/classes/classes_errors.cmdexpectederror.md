[getopts - v1.0.0-alpha.4](../README.md) / [classes/errors](../modules/classes_errors.md) / CmdExpectedError

# Class: CmdExpectedError

[classes/errors](../modules/classes_errors.md).CmdExpectedError

## Hierarchy

- _Error_

  ↳ **CmdExpectedError**

## Table of contents

### Constructors

- [constructor](classes_errors.cmdexpectederror.md#constructor)

### Properties

- [expectedCmds](classes_errors.cmdexpectederror.md#expectedcmds)
- [message](classes_errors.cmdexpectederror.md#message)
- [name](classes_errors.cmdexpectederror.md#name)
- [prepareStackTrace](classes_errors.cmdexpectederror.md#preparestacktrace)
- [stack](classes_errors.cmdexpectederror.md#stack)
- [stackTraceLimit](classes_errors.cmdexpectederror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.cmdexpectederror.md#capturestacktrace)

## Constructors

### constructor

\+ **new CmdExpectedError**(`message`: _string_, `expectedCmds`: _string_[]): [_CmdExpectedError_](classes_errors.cmdexpectederror.md)

Expected CLI command error.

#### Parameters:

| Name           | Type       | Description                      |
| :------------- | :--------- | :------------------------------- |
| `message`      | _string_   | Error message.                   |
| `expectedCmds` | _string_[] | CLI commands that were expected. |

**Returns:** [_CmdExpectedError_](classes_errors.cmdexpectederror.md)

Defined in: [src/classes/errors.ts:241](https://github.com/prasadrajandran/node-getopts/blob/62e4ad2/src/classes/errors.ts#L241)

## Properties

### expectedCmds

• **expectedCmds**: _string_[]

CLI commands that were expected.

Defined in: [src/classes/errors.ts:241](https://github.com/prasadrajandran/node-getopts/blob/62e4ad2/src/classes/errors.ts#L241)

---

### message

• **message**: _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'CmdExpectedError'

Defined in: [src/classes/errors.ts:237](https://github.com/prasadrajandran/node-getopts/blob/62e4ad2/src/classes/errors.ts#L237)

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
