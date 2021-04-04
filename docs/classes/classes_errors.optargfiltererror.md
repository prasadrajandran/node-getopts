[getopts - v1.0.0-beta.2](../README.md) / [classes/errors](../modules/classes_errors.md) / OptArgFilterError

# Class: OptArgFilterError

[classes/errors](../modules/classes_errors.md).OptArgFilterError

## Hierarchy

- [_ParseError_](classes_errors.parseerror.md)

  ↳ **OptArgFilterError**

## Table of contents

### Constructors

- [constructor](classes_errors.optargfiltererror.md#constructor)

### Properties

- [details](classes_errors.optargfiltererror.md#details)
- [message](classes_errors.optargfiltererror.md#message)
- [name](classes_errors.optargfiltererror.md#name)
- [stack](classes_errors.optargfiltererror.md#stack)
- [prepareStackTrace](classes_errors.optargfiltererror.md#preparestacktrace)
- [stackTraceLimit](classes_errors.optargfiltererror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.optargfiltererror.md#capturestacktrace)

## Constructors

### constructor

\+ **new OptArgFilterError**(`opt`: _string_, `arg`: _string_, `argFilter`: [_OptArgFilter_](../interfaces/interfaces_schema.optargfilter.md), `argFilterError`: _unknown_): [_OptArgFilterError_](classes_errors.optargfiltererror.md)

CLI option argument filter error.

#### Parameters:

| Name             | Type                                                              | Description                                                    |
| :--------------- | :---------------------------------------------------------------- | :------------------------------------------------------------- |
| `opt`            | _string_                                                          | CLI option that owns the filter that threw the exception.      |
| `arg`            | _string_                                                          | CLI option's argument that generated the exception.            |
| `argFilter`      | [_OptArgFilter_](../interfaces/interfaces_schema.optargfilter.md) | CLI option's argument filter that threw the exception.         |
| `argFilterError` | _unknown_                                                         | Exception that was thrown by the CLI option's argument filter. |

**Returns:** [_OptArgFilterError_](classes_errors.optargfiltererror.md)

Overrides: [ParseError](classes_errors.parseerror.md)

Defined in: [src/classes/errors.ts:105](https://github.com/prasadrajandran/node-getopts/blob/a583df7/src/classes/errors.ts#L105)

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

• **name**: _string_= 'OptArgFilterError'

Overrides: [ParseError](classes_errors.parseerror.md).[name](classes_errors.parseerror.md#name)

Defined in: [src/classes/errors.ts:105](https://github.com/prasadrajandran/node-getopts/blob/a583df7/src/classes/errors.ts#L105)

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
