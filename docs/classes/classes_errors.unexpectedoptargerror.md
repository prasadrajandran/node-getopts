[getopts - v1.0.0](../README.md) / [classes/errors](../modules/classes_errors.md) / UnexpectedOptArgError

# Class: UnexpectedOptArgError

[classes/errors](../modules/classes_errors.md).UnexpectedOptArgError

## Hierarchy

- [_ParseError_](classes_errors.parseerror.md)

  ↳ **UnexpectedOptArgError**

## Table of contents

### Constructors

- [constructor](classes_errors.unexpectedoptargerror.md#constructor)

### Properties

- [details](classes_errors.unexpectedoptargerror.md#details)
- [message](classes_errors.unexpectedoptargerror.md#message)
- [name](classes_errors.unexpectedoptargerror.md#name)
- [stack](classes_errors.unexpectedoptargerror.md#stack)
- [prepareStackTrace](classes_errors.unexpectedoptargerror.md#preparestacktrace)
- [stackTraceLimit](classes_errors.unexpectedoptargerror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.unexpectedoptargerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new UnexpectedOptArgError**(`opt`: _string_, `arg`: _string_): [_UnexpectedOptArgError_](classes_errors.unexpectedoptargerror.md)

Unexpected CLI option argument error.

#### Parameters:

| Name  | Type     | Description                                                                      |
| :---- | :------- | :------------------------------------------------------------------------------- |
| `opt` | _string_ | Option that received the unexpected argument.                                    |
| `arg` | _string_ | The unexpected argument the option (that doesn't accept arguments) was provided. |

**Returns:** [_UnexpectedOptArgError_](classes_errors.unexpectedoptargerror.md)

Overrides: [ParseError](classes_errors.parseerror.md)

Defined in: [src/classes/errors.ts:62](https://github.com/prasadrajandran/node-getopts/blob/c78e9e9/src/classes/errors.ts#L62)

## Properties

### details

• **details**: _Map_<string, unknown\>

Additional error data.

Inherited from: [ParseError](classes_errors.parseerror.md).[details](classes_errors.parseerror.md#details)

Defined in: [src/classes/errors.ts:14](https://github.com/prasadrajandran/node-getopts/blob/c78e9e9/src/classes/errors.ts#L14)

---

### message

• **message**: _string_

Inherited from: [ParseError](classes_errors.parseerror.md).[message](classes_errors.parseerror.md#message)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'UnexpectedOptArgError'

Overrides: [ParseError](classes_errors.parseerror.md).[name](classes_errors.parseerror.md#name)

Defined in: [src/classes/errors.ts:62](https://github.com/prasadrajandran/node-getopts/blob/c78e9e9/src/classes/errors.ts#L62)

---

### stack

• `Optional` **stack**: _string_

Inherited from: [ParseError](classes_errors.parseerror.md).[stack](classes_errors.parseerror.md#stack)

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

Inherited from: [ParseError](classes_errors.parseerror.md).[prepareStackTrace](classes_errors.parseerror.md#preparestacktrace)

Defined in: node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: _number_

Inherited from: [ParseError](classes_errors.parseerror.md).[stackTraceLimit](classes_errors.parseerror.md#stacktracelimit)

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

Inherited from: [ParseError](classes_errors.parseerror.md)

Defined in: node_modules/@types/node/globals.d.ts:4
