[getopts - v1.0.0-alpha.6](../README.md) / [classes/errors](../modules/classes_errors.md) / OptArgFilterError

# Class: OptArgFilterError

[classes/errors](../modules/classes_errors.md).OptArgFilterError

## Hierarchy

- _Error_

  ↳ **OptArgFilterError**

## Table of contents

### Constructors

- [constructor](classes_errors.optargfiltererror.md#constructor)

### Properties

- [arg](classes_errors.optargfiltererror.md#arg)
- [argFilter](classes_errors.optargfiltererror.md#argfilter)
- [argFilterError](classes_errors.optargfiltererror.md#argfiltererror)
- [message](classes_errors.optargfiltererror.md#message)
- [name](classes_errors.optargfiltererror.md#name)
- [opt](classes_errors.optargfiltererror.md#opt)
- [prepareStackTrace](classes_errors.optargfiltererror.md#preparestacktrace)
- [stack](classes_errors.optargfiltererror.md#stack)
- [stackTraceLimit](classes_errors.optargfiltererror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.optargfiltererror.md#capturestacktrace)

## Constructors

### constructor

\+ **new OptArgFilterError**(`message`: _string_, `opt`: _string_, `arg`: _string_, `argFilter`: [_OptArgFilter_](../interfaces/interfaces_schema.optargfilter.md), `argFilterError`: Error): [_OptArgFilterError_](classes_errors.optargfiltererror.md)

CLI option argument filter error.

#### Parameters:

| Name             | Type                                                              | Description                                                    |
| :--------------- | :---------------------------------------------------------------- | :------------------------------------------------------------- |
| `message`        | _string_                                                          | Error message.                                                 |
| `opt`            | _string_                                                          | CLI option that owns the filter that threw the exception.      |
| `arg`            | _string_                                                          | CLI option's argument that generated the exception.            |
| `argFilter`      | [_OptArgFilter_](../interfaces/interfaces_schema.optargfilter.md) | CLI option's argument filter that threw the exception.         |
| `argFilterError` | Error                                                             | Exception that was thrown by the CLI option's argument filter. |

**Returns:** [_OptArgFilterError_](classes_errors.optargfiltererror.md)

Defined in: [src/classes/errors.ts:147](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L147)

## Properties

### arg

• **arg**: _string_

CLI option's argument that generated the exception.

Defined in: [src/classes/errors.ts:139](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L139)

---

### argFilter

• **argFilter**: [_OptArgFilter_](../interfaces/interfaces_schema.optargfilter.md)

CLI option's argument filter that threw the exception.

Defined in: [src/classes/errors.ts:143](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L143)

---

### argFilterError

• **argFilterError**: Error

Exception that was thrown by the CLI option's argument filter.

Defined in: [src/classes/errors.ts:147](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L147)

---

### message

• **message**: _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'OptArgFilterError'

Defined in: [src/classes/errors.ts:131](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L131)

---

### opt

• **opt**: _string_

CLI option that owns the filter that threw the exception.

Defined in: [src/classes/errors.ts:135](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L135)

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
