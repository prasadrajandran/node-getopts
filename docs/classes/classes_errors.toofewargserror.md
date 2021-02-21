[getopts - v1.0.0-alpha.3](../README.md) / [classes/errors](../modules/classes_errors.md) / TooFewArgsError

# Class: TooFewArgsError

[classes/errors](../modules/classes_errors.md).TooFewArgsError

## Hierarchy

- _Error_

  ↳ **TooFewArgsError**

## Table of contents

### Constructors

- [constructor](classes_errors.toofewargserror.md#constructor)

### Properties

- [message](classes_errors.toofewargserror.md#message)
- [minArgsExpected](classes_errors.toofewargserror.md#minargsexpected)
- [name](classes_errors.toofewargserror.md#name)
- [numArgsReceived](classes_errors.toofewargserror.md#numargsreceived)
- [prepareStackTrace](classes_errors.toofewargserror.md#preparestacktrace)
- [stack](classes_errors.toofewargserror.md#stack)
- [stackTraceLimit](classes_errors.toofewargserror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.toofewargserror.md#capturestacktrace)

## Constructors

### constructor

\+ **new TooFewArgsError**(`message`: _string_, `numArgsReceived`: _number_, `minArgsExpected`: _number_): [_TooFewArgsError_](classes_errors.toofewargserror.md)

Too few CLI arguments error.

#### Parameters:

| Name              | Type     | Description                                      |
| :---------------- | :------- | :----------------------------------------------- |
| `message`         | _string_ | Error message.                                   |
| `numArgsReceived` | _number_ | The total number of CLI arguments received.      |
| `minArgsExpected` | _number_ | The minimum number of arguments the CLI expects. |

**Returns:** [_TooFewArgsError_](classes_errors.toofewargserror.md)

Defined in: [src/classes/errors.ts:191](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/classes/errors.ts#L191)

## Properties

### message

• **message**: _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### minArgsExpected

• **minArgsExpected**: _number_

The minimum number of arguments the CLI expects.

Defined in: [src/classes/errors.ts:191](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/classes/errors.ts#L191)

---

### name

• **name**: _string_= 'TooFewArgsError'

Defined in: [src/classes/errors.ts:183](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/classes/errors.ts#L183)

---

### numArgsReceived

• **numArgsReceived**: _number_

The total number of CLI arguments received.

Defined in: [src/classes/errors.ts:187](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/classes/errors.ts#L187)

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
