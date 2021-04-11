[getopts - v1.0.0-beta.3](../README.md) / [classes/errors](../modules/classes_errors.md) / UnknownOptError

# Class: UnknownOptError

[classes/errors](../modules/classes_errors.md).UnknownOptError

## Hierarchy

- [_ParseError_](classes_errors.parseerror.md)

  ↳ **UnknownOptError**

## Table of contents

### Constructors

- [constructor](classes_errors.unknownopterror.md#constructor)

### Properties

- [details](classes_errors.unknownopterror.md#details)
- [message](classes_errors.unknownopterror.md#message)
- [name](classes_errors.unknownopterror.md#name)
- [stack](classes_errors.unknownopterror.md#stack)
- [prepareStackTrace](classes_errors.unknownopterror.md#preparestacktrace)
- [stackTraceLimit](classes_errors.unknownopterror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.unknownopterror.md#capturestacktrace)

## Constructors

### constructor

\+ **new UnknownOptError**(`unknownOpt`: _string_): [_UnknownOptError_](classes_errors.unknownopterror.md)

Unknown CLI option error.

#### Parameters:

| Name         | Type     | Description                     |
| :----------- | :------- | :------------------------------ |
| `unknownOpt` | _string_ | Name of the unknown CLI option. |

**Returns:** [_UnknownOptError_](classes_errors.unknownopterror.md)

Overrides: [ParseError](classes_errors.parseerror.md)

Defined in: [src/classes/errors.ts:18](https://github.com/prasadrajandran/node-getopts/blob/11bb392/src/classes/errors.ts#L18)

## Properties

### details

• **details**: _Map_<string, unknown\>

Additional error data.

Inherited from: [ParseError](classes_errors.parseerror.md).[details](classes_errors.parseerror.md#details)

Defined in: [src/classes/errors.ts:14](https://github.com/prasadrajandran/node-getopts/blob/11bb392/src/classes/errors.ts#L14)

---

### message

• **message**: _string_

Inherited from: [ParseError](classes_errors.parseerror.md).[message](classes_errors.parseerror.md#message)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'UnknownOptError'

Overrides: [ParseError](classes_errors.parseerror.md).[name](classes_errors.parseerror.md#name)

Defined in: [src/classes/errors.ts:18](https://github.com/prasadrajandran/node-getopts/blob/11bb392/src/classes/errors.ts#L18)

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
