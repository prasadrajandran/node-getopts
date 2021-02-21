[getopts - v1.0.0-alpha.3](../README.md) / [classes/errors](../modules/classes_errors.md) / OptMissingArgError

# Class: OptMissingArgError

[classes/errors](../modules/classes_errors.md).OptMissingArgError

## Hierarchy

- _Error_

  ↳ **OptMissingArgError**

## Table of contents

### Constructors

- [constructor](classes_errors.optmissingargerror.md#constructor)

### Properties

- [message](classes_errors.optmissingargerror.md#message)
- [name](classes_errors.optmissingargerror.md#name)
- [opt](classes_errors.optmissingargerror.md#opt)
- [prepareStackTrace](classes_errors.optmissingargerror.md#preparestacktrace)
- [stack](classes_errors.optmissingargerror.md#stack)
- [stackTraceLimit](classes_errors.optmissingargerror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.optmissingargerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new OptMissingArgError**(`message`: _string_, `opt`: _string_): [_OptMissingArgError_](classes_errors.optmissingargerror.md)

CLI option missing argument error.

#### Parameters:

| Name      | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `message` | _string_ | Error message.                           |
| `opt`     | _string_ | CLI option that is missing its argument. |

**Returns:** [_OptMissingArgError_](classes_errors.optmissingargerror.md)

Defined in: [src/classes/errors.ts:48](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/classes/errors.ts#L48)

## Properties

### message

• **message**: _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'OptMissingArgError'

Defined in: [src/classes/errors.ts:44](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/classes/errors.ts#L44)

---

### opt

• **opt**: _string_

CLI option that is missing its argument.

Defined in: [src/classes/errors.ts:48](https://github.com/prasadrajandran/node-getopts/blob/1bad317/src/classes/errors.ts#L48)

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
