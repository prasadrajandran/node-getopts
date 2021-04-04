[getopts - v1.0.0-beta.2](../README.md) / [classes/errors](../modules/classes_errors.md) / OptMissingArgError

# Class: OptMissingArgError

[classes/errors](../modules/classes_errors.md).OptMissingArgError

## Hierarchy

- [_ParseError_](classes_errors.parseerror.md)

  ↳ **OptMissingArgError**

## Table of contents

### Constructors

- [constructor](classes_errors.optmissingargerror.md#constructor)

### Properties

- [details](classes_errors.optmissingargerror.md#details)
- [message](classes_errors.optmissingargerror.md#message)
- [name](classes_errors.optmissingargerror.md#name)
- [stack](classes_errors.optmissingargerror.md#stack)
- [prepareStackTrace](classes_errors.optmissingargerror.md#preparestacktrace)
- [stackTraceLimit](classes_errors.optmissingargerror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.optmissingargerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new OptMissingArgError**(`opt`: _string_): [_OptMissingArgError_](classes_errors.optmissingargerror.md)

CLI option missing argument error.

#### Parameters:

| Name  | Type     | Description                              |
| :---- | :------- | :--------------------------------------- |
| `opt` | _string_ | CLI option that is missing its argument. |

**Returns:** [_OptMissingArgError_](classes_errors.optmissingargerror.md)

Overrides: [ParseError](classes_errors.parseerror.md)

Defined in: [src/classes/errors.ts:47](https://github.com/prasadrajandran/node-getopts/blob/a583df7/src/classes/errors.ts#L47)

## Properties

### details

• **details**: _Map_<string, unknown\>

Additional error data.

Inherited from: [ParseError](classes_errors.parseerror.md).[details](classes_errors.parseerror.md#details)

Defined in: [src/classes/errors.ts:12](https://github.com/prasadrajandran/node-getopts/blob/a583df7/src/classes/errors.ts#L12)

---

### message

• **message**: _string_

Inherited from: [ParseError](classes_errors.parseerror.md).[message](classes_errors.parseerror.md#message)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'OptMissingArgError'

Overrides: [ParseError](classes_errors.parseerror.md).[name](classes_errors.parseerror.md#name)

Defined in: [src/classes/errors.ts:47](https://github.com/prasadrajandran/node-getopts/blob/a583df7/src/classes/errors.ts#L47)

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
