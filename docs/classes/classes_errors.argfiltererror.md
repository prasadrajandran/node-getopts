[getopts - v1.0.0-alpha.6](../README.md) / [classes/errors](../modules/classes_errors.md) / ArgFilterError

# Class: ArgFilterError

[classes/errors](../modules/classes_errors.md).ArgFilterError

## Hierarchy

- _Error_

  ↳ **ArgFilterError**

## Table of contents

### Constructors

- [constructor](classes_errors.argfiltererror.md#constructor)

### Properties

- [arg](classes_errors.argfiltererror.md#arg)
- [argFilter](classes_errors.argfiltererror.md#argfilter)
- [argFilterError](classes_errors.argfiltererror.md#argfiltererror)
- [argPos](classes_errors.argfiltererror.md#argpos)
- [message](classes_errors.argfiltererror.md#message)
- [name](classes_errors.argfiltererror.md#name)
- [prepareStackTrace](classes_errors.argfiltererror.md#preparestacktrace)
- [stack](classes_errors.argfiltererror.md#stack)
- [stackTraceLimit](classes_errors.argfiltererror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.argfiltererror.md#capturestacktrace)

## Constructors

### constructor

\+ **new ArgFilterError**(`message`: _string_, `arg`: _string_, `argPos`: _number_, `argFilter`: [_ArgFilter_](../interfaces/interfaces_schema.argfilter.md), `argFilterError`: Error): [_ArgFilterError_](classes_errors.argfiltererror.md)

CLI argument filter error.

#### Parameters:

| Name             | Type                                                        | Description                                             |
| :--------------- | :---------------------------------------------------------- | :------------------------------------------------------ |
| `message`        | _string_                                                    | Error message.                                          |
| `arg`            | _string_                                                    | CLI argument value.                                     |
| `argPos`         | _number_                                                    | CLI argument's position (starting from 0).              |
| `argFilter`      | [_ArgFilter_](../interfaces/interfaces_schema.argfilter.md) | CLI argument's filter that threw the exception.         |
| `argFilterError` | Error                                                       | Exception that was thrown by the CLI argument's filter. |

**Returns:** [_ArgFilterError_](classes_errors.argfiltererror.md)

Defined in: [src/classes/errors.ts:104](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L104)

## Properties

### arg

• **arg**: _string_

CLI argument value.

Defined in: [src/classes/errors.ts:92](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L92)

---

### argFilter

• **argFilter**: [_ArgFilter_](../interfaces/interfaces_schema.argfilter.md)

CLI argument's filter that threw the exception.

Defined in: [src/classes/errors.ts:100](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L100)

---

### argFilterError

• **argFilterError**: Error

Exception that was thrown by the CLI argument's filter.

Defined in: [src/classes/errors.ts:104](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L104)

---

### argPos

• **argPos**: _number_

CLI argument's position (starting from 0).

Defined in: [src/classes/errors.ts:96](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L96)

---

### message

• **message**: _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'ArgFilterError'

Defined in: [src/classes/errors.ts:88](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L88)

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
