[getopts - v1.0.0-alpha.6](../README.md) / [classes/errors](../modules/classes_errors.md) / InsufficientArgsError

# Class: InsufficientArgsError

[classes/errors](../modules/classes_errors.md).InsufficientArgsError

## Hierarchy

- _Error_

  ↳ **InsufficientArgsError**

## Table of contents

### Constructors

- [constructor](classes_errors.insufficientargserror.md#constructor)

### Properties

- [message](classes_errors.insufficientargserror.md#message)
- [minArgsExpected](classes_errors.insufficientargserror.md#minargsexpected)
- [name](classes_errors.insufficientargserror.md#name)
- [numArgsReceived](classes_errors.insufficientargserror.md#numargsreceived)
- [prepareStackTrace](classes_errors.insufficientargserror.md#preparestacktrace)
- [stack](classes_errors.insufficientargserror.md#stack)
- [stackTraceLimit](classes_errors.insufficientargserror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.insufficientargserror.md#capturestacktrace)

## Constructors

### constructor

\+ **new InsufficientArgsError**(`message`: _string_, `numArgsReceived`: _number_, `minArgsExpected`: _number_): [_InsufficientArgsError_](classes_errors.insufficientargserror.md)

Too few CLI arguments error.

#### Parameters:

| Name              | Type     | Description                                      |
| :---------------- | :------- | :----------------------------------------------- |
| `message`         | _string_ | Error message.                                   |
| `numArgsReceived` | _number_ | The total number of CLI arguments received.      |
| `minArgsExpected` | _number_ | The minimum number of arguments the CLI expects. |

**Returns:** [_InsufficientArgsError_](classes_errors.insufficientargserror.md)

Defined in: [src/classes/errors.ts:217](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L217)

## Properties

### message

• **message**: _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### minArgsExpected

• **minArgsExpected**: _number_

The minimum number of arguments the CLI expects.

Defined in: [src/classes/errors.ts:217](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L217)

---

### name

• **name**: _string_= 'InsufficientArgsError'

Defined in: [src/classes/errors.ts:209](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L209)

---

### numArgsReceived

• **numArgsReceived**: _number_

The total number of CLI arguments received.

Defined in: [src/classes/errors.ts:213](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L213)

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
