[getopts - v1.0.0](../README.md) / [classes/errors](../modules/classes_errors.md) / ParseError

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

  ↳↳ [_DuplicateAliasOptError_](classes_errors.duplicatealiasopterror.md)

## Table of contents

### Constructors

- [constructor](classes_errors.parseerror.md#constructor)

### Properties

- [details](classes_errors.parseerror.md#details)
- [message](classes_errors.parseerror.md#message)
- [name](classes_errors.parseerror.md#name)
- [stack](classes_errors.parseerror.md#stack)
- [prepareStackTrace](classes_errors.parseerror.md#preparestacktrace)
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

Inherited from: Error.constructor

Defined in: node_modules/typescript/lib/lib.es5.d.ts:978

## Properties

### details

• **details**: _Map_<string, unknown\>

Additional error data.

Defined in: [src/classes/errors.ts:14](https://github.com/prasadrajandran/node-getopts/blob/c78e9e9/src/classes/errors.ts#L14)

---

### message

• **message**: _string_

Inherited from: Error.message

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'ParseError'

Overrides: Error.name

Defined in: [src/classes/errors.ts:10](https://github.com/prasadrajandran/node-getopts/blob/c78e9e9/src/classes/errors.ts#L10)

---

### stack

• `Optional` **stack**: _string_

Inherited from: Error.stack

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

---

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => _any_

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration:

▸ (`err`: Error, `stackTraces`: CallSite[]): _any_

#### Parameters:

| Name          | Type       |
| :------------ | :--------- |
| `err`         | Error      |
| `stackTraces` | CallSite[] |

**Returns:** _any_

Defined in: node_modules/@types/node/globals.d.ts:11

Inherited from: Error.prepareStackTrace

Defined in: node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: _number_

Inherited from: Error.stackTraceLimit

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

Inherited from: Error.captureStackTrace

Defined in: node_modules/@types/node/globals.d.ts:4
