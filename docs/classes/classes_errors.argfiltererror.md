[getopts - v1.0.0-beta.3](../README.md) / [classes/errors](../modules/classes_errors.md) / ArgFilterError

# Class: ArgFilterError

[classes/errors](../modules/classes_errors.md).ArgFilterError

## Hierarchy

- [_ParseError_](classes_errors.parseerror.md)

  ↳ **ArgFilterError**

## Table of contents

### Constructors

- [constructor](classes_errors.argfiltererror.md#constructor)

### Properties

- [details](classes_errors.argfiltererror.md#details)
- [message](classes_errors.argfiltererror.md#message)
- [name](classes_errors.argfiltererror.md#name)
- [stack](classes_errors.argfiltererror.md#stack)
- [prepareStackTrace](classes_errors.argfiltererror.md#preparestacktrace)
- [stackTraceLimit](classes_errors.argfiltererror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.argfiltererror.md#capturestacktrace)

## Constructors

### constructor

\+ **new ArgFilterError**(`arg`: _string_, `argFilter`: [_ArgFilter_](../interfaces/interfaces_schema.argfilter.md), `argFilterError`: _unknown_): [_ArgFilterError_](classes_errors.argfiltererror.md)

CLI argument filter error.

#### Parameters:

| Name             | Type                                                        | Description                                             |
| :--------------- | :---------------------------------------------------------- | :------------------------------------------------------ |
| `arg`            | _string_                                                    | CLI argument value.                                     |
| `argFilter`      | [_ArgFilter_](../interfaces/interfaces_schema.argfilter.md) | CLI argument's filter that threw the exception.         |
| `argFilterError` | _unknown_                                                   | Exception that was thrown by the CLI argument's filter. |

**Returns:** [_ArgFilterError_](classes_errors.argfiltererror.md)

Overrides: [ParseError](classes_errors.parseerror.md)

Defined in: [src/classes/errors.ts:78](https://github.com/prasadrajandran/node-getopts/blob/11bb392/src/classes/errors.ts#L78)

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

• **name**: _string_= 'ArgFilterError'

Overrides: [ParseError](classes_errors.parseerror.md).[name](classes_errors.parseerror.md#name)

Defined in: [src/classes/errors.ts:78](https://github.com/prasadrajandran/node-getopts/blob/11bb392/src/classes/errors.ts#L78)

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
