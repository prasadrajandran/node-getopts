[getopts - v1.0.0-alpha.7](../README.md) / [classes/errors](../modules/classes_errors.md) / ExcessArgsError

# Class: ExcessArgsError

[classes/errors](../modules/classes_errors.md).ExcessArgsError

## Hierarchy

- [_ParseError_](classes_errors.parseerror.md)

  ↳ **ExcessArgsError**

## Table of contents

### Constructors

- [constructor](classes_errors.excessargserror.md#constructor)

### Properties

- [details](classes_errors.excessargserror.md#details)
- [message](classes_errors.excessargserror.md#message)
- [name](classes_errors.excessargserror.md#name)
- [prepareStackTrace](classes_errors.excessargserror.md#preparestacktrace)
- [stack](classes_errors.excessargserror.md#stack)
- [stackTraceLimit](classes_errors.excessargserror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.excessargserror.md#capturestacktrace)

## Constructors

### constructor

\+ **new ExcessArgsError**(`excessArgs`: _string_[], `numArgsReceived`: _number_, `maxArgsExpected`: _number_): [_ExcessArgsError_](classes_errors.excessargserror.md)

Excess CLI arguments error.

#### Parameters:

| Name              | Type       | Description                                      |
| :---------------- | :--------- | :----------------------------------------------- |
| `excessArgs`      | _string_[] | The excess CLI arguments.                        |
| `numArgsReceived` | _number_   | The total number of arguments the CLI received.  |
| `maxArgsExpected` | _number_   | The maximum number of arguments the CLI accepts. |

**Returns:** [_ExcessArgsError_](classes_errors.excessargserror.md)

Inherited from: [ParseError](classes_errors.parseerror.md)

Defined in: [src/classes/errors.ts:133](https://github.com/prasadrajandran/node-getopts/blob/4a1b437/src/classes/errors.ts#L133)

## Properties

### details

• **details**: _Map_<string, unknown\>

Additional error data.

Inherited from: [ParseError](classes_errors.parseerror.md).[details](classes_errors.parseerror.md#details)

Defined in: [src/classes/errors.ts:12](https://github.com/prasadrajandran/node-getopts/blob/4a1b437/src/classes/errors.ts#L12)

---

### message

• **message**: _string_

Inherited from: [ParseError](classes_errors.parseerror.md).[message](classes_errors.parseerror.md#message)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'ExcessArgsError'

Overrides: [ParseError](classes_errors.parseerror.md).[name](classes_errors.parseerror.md#name)

Defined in: [src/classes/errors.ts:133](https://github.com/prasadrajandran/node-getopts/blob/4a1b437/src/classes/errors.ts#L133)

---

### prepareStackTrace

• `Optional` **prepareStackTrace**: _undefined_ \| (`err`: Error, `stackTraces`: CallSite[]) => _any_

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

Inherited from: [ParseError](classes_errors.parseerror.md).[prepareStackTrace](classes_errors.parseerror.md#preparestacktrace)

Defined in: node_modules/@types/node/globals.d.ts:11

---

### stack

• `Optional` **stack**: _undefined_ \| _string_

Inherited from: [ParseError](classes_errors.parseerror.md).[stack](classes_errors.parseerror.md#stack)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

---

### stackTraceLimit

• **stackTraceLimit**: _number_

Inherited from: [ParseError](classes_errors.parseerror.md).[stackTraceLimit](classes_errors.parseerror.md#stacktracelimit)

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

Inherited from: [ParseError](classes_errors.parseerror.md)

Defined in: node_modules/@types/node/globals.d.ts:4
