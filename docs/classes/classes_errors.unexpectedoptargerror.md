[getopts - v1.0.0-alpha.5](../README.md) / [classes/errors](../modules/classes_errors.md) / UnexpectedOptArgError

# Class: UnexpectedOptArgError

[classes/errors](../modules/classes_errors.md).UnexpectedOptArgError

## Hierarchy

- _Error_

  ↳ **UnexpectedOptArgError**

## Table of contents

### Constructors

- [constructor](classes_errors.unexpectedoptargerror.md#constructor)

### Properties

- [message](classes_errors.unexpectedoptargerror.md#message)
- [name](classes_errors.unexpectedoptargerror.md#name)
- [prepareStackTrace](classes_errors.unexpectedoptargerror.md#preparestacktrace)
- [stack](classes_errors.unexpectedoptargerror.md#stack)
- [stackTraceLimit](classes_errors.unexpectedoptargerror.md#stacktracelimit)
- [unexpectedOptArg](classes_errors.unexpectedoptargerror.md#unexpectedoptarg)

### Methods

- [captureStackTrace](classes_errors.unexpectedoptargerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new UnexpectedOptArgError**(`message`: _string_, `unexpectedOptArg`: _string_): [_UnexpectedOptArgError_](classes_errors.unexpectedoptargerror.md)

Unexpected Option Argument Error.

#### Parameters:

| Name               | Type     | Description                                                                      |
| :----------------- | :------- | :------------------------------------------------------------------------------- |
| `message`          | _string_ | Error message.                                                                   |
| `unexpectedOptArg` | _string_ | The unexpected argument the option (that doesn't accept arguments) was provided. |

**Returns:** [_UnexpectedOptArgError_](classes_errors.unexpectedoptargerror.md)

Defined in: [src/classes/errors.ts:73](https://github.com/prasadrajandran/node-getopts/blob/086dff0/src/classes/errors.ts#L73)

## Properties

### message

• **message**: _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'UnexpectedOptArgError'

Defined in: [src/classes/errors.ts:68](https://github.com/prasadrajandran/node-getopts/blob/086dff0/src/classes/errors.ts#L68)

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

### unexpectedOptArg

• **unexpectedOptArg**: _string_

The unexpected argument the option (that doesn't accept arguments) was
provided.

Defined in: [src/classes/errors.ts:73](https://github.com/prasadrajandran/node-getopts/blob/086dff0/src/classes/errors.ts#L73)

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
