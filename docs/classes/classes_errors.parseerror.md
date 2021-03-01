[getopts - v1.0.0-alpha.7](../README.md) / [classes/errors](../modules/classes_errors.md) / ParseError

# Class: ParseError

[classes/errors](../modules/classes_errors.md).ParseError

## Hierarchy

- _Error_

  ↳ **ParseError**

  ↳↳ [_UnknownOptError_](classes_errors.unknownopterror.md)

  ↳↳ [_UnknownCmdError_](classes_errors.unknowncmderror.md)

  ↳↳ [_OptMissingArgError_](classes_errors.optmissingargerror.md)

  ↳↳ [_UnexpectedOptArgError_](classes_errors.unexpectedoptargerror.md)

  ↳↳ [_ArgFilterError_](classes_errors.argfiltererror.md)

  ↳↳ [_OptArgFilterError_](classes_errors.optargfiltererror.md)

  ↳↳ [_ExcessArgsError_](classes_errors.excessargserror.md)

  ↳↳ [_InsufficientArgsError_](classes_errors.insufficientargserror.md)

  ↳↳ [_CmdExpectedError_](classes_errors.cmdexpectederror.md)

  ↳↳ [_DuplicateOptError_](classes_errors.duplicateopterror.md)

## Table of contents

### Constructors

- [constructor](classes_errors.parseerror.md#constructor)

### Properties

- [details](classes_errors.parseerror.md#details)
- [message](classes_errors.parseerror.md#message)
- [name](classes_errors.parseerror.md#name)
- [prepareStackTrace](classes_errors.parseerror.md#preparestacktrace)
- [stack](classes_errors.parseerror.md#stack)
- [stackTraceLimit](classes_errors.parseerror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.parseerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new ParseError**(`message?`: _string_): [_ParseError_](classes_errors.parseerror.md)

#### Parameters:

| Name       | Type     |
| :--------- | :------- |
| `message?` | _string_ |

**Returns:** [_ParseError_](classes_errors.parseerror.md)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:978

## Properties

### details

• **details**: _Map_<string, unknown\>

Additional error data.

Defined in: [src/classes/errors.ts:12](https://github.com/prasadrajandran/node-getopts/blob/4a1b437/src/classes/errors.ts#L12)

---

### message

• **message**: _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'ParseError'

Defined in: [src/classes/errors.ts:8](https://github.com/prasadrajandran/node-getopts/blob/4a1b437/src/classes/errors.ts#L8)

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
