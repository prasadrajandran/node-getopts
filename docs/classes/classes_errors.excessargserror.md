[getopts - v1.0.0-alpha.6](../README.md) / [classes/errors](../modules/classes_errors.md) / ExcessArgsError

# Class: ExcessArgsError

[classes/errors](../modules/classes_errors.md).ExcessArgsError

## Hierarchy

- _Error_

  ↳ **ExcessArgsError**

## Table of contents

### Constructors

- [constructor](classes_errors.excessargserror.md#constructor)

### Properties

- [excessArgs](classes_errors.excessargserror.md#excessargs)
- [maxArgsExpected](classes_errors.excessargserror.md#maxargsexpected)
- [message](classes_errors.excessargserror.md#message)
- [name](classes_errors.excessargserror.md#name)
- [numArgsReceived](classes_errors.excessargserror.md#numargsreceived)
- [prepareStackTrace](classes_errors.excessargserror.md#preparestacktrace)
- [stack](classes_errors.excessargserror.md#stack)
- [stackTraceLimit](classes_errors.excessargserror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.excessargserror.md#capturestacktrace)

## Constructors

### constructor

\+ **new ExcessArgsError**(`message`: _string_, `excessArgs`: _string_[], `numArgsReceived`: _number_, `maxArgsExpected`: _number_): [_ExcessArgsError_](classes_errors.excessargserror.md)

Too many CLI arguments error.

#### Parameters:

| Name              | Type       | Description                                      |
| :---------------- | :--------- | :----------------------------------------------- |
| `message`         | _string_   | Error message.                                   |
| `excessArgs`      | _string_[] | The excess CLI arguments.                        |
| `numArgsReceived` | _number_   | The total number of arguments the CLI received.  |
| `maxArgsExpected` | _number_   | The maximum number of arguments the CLI accepts. |

**Returns:** [_ExcessArgsError_](classes_errors.excessargserror.md)

Defined in: [src/classes/errors.ts:186](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L186)

## Properties

### excessArgs

• **excessArgs**: _string_[]

The excess CLI arguments.

Defined in: [src/classes/errors.ts:178](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L178)

---

### maxArgsExpected

• **maxArgsExpected**: _number_

The maximum number of arguments the CLI accepts.

Defined in: [src/classes/errors.ts:186](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L186)

---

### message

• **message**: _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'ExcessArgsError'

Defined in: [src/classes/errors.ts:174](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L174)

---

### numArgsReceived

• **numArgsReceived**: _number_

The total number of arguments the CLI received.

Defined in: [src/classes/errors.ts:182](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L182)

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
