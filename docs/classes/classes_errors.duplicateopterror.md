[getopts - v1.0.0-alpha.6](../README.md) / [classes/errors](../modules/classes_errors.md) / DuplicateOptError

# Class: DuplicateOptError

[classes/errors](../modules/classes_errors.md).DuplicateOptError

## Hierarchy

- _Error_

  ↳ **DuplicateOptError**

## Table of contents

### Constructors

- [constructor](classes_errors.duplicateopterror.md#constructor)

### Properties

- [count](classes_errors.duplicateopterror.md#count)
- [duplicateOpt](classes_errors.duplicateopterror.md#duplicateopt)
- [message](classes_errors.duplicateopterror.md#message)
- [name](classes_errors.duplicateopterror.md#name)
- [prepareStackTrace](classes_errors.duplicateopterror.md#preparestacktrace)
- [stack](classes_errors.duplicateopterror.md#stack)
- [stackTraceLimit](classes_errors.duplicateopterror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.duplicateopterror.md#capturestacktrace)

## Constructors

### constructor

\+ **new DuplicateOptError**(`message`: _string_, `duplicateOpt`: _string_, `count`: _number_): [_DuplicateOptError_](classes_errors.duplicateopterror.md)

Duplicate Option Error.

#### Parameters:

| Name           | Type     | Description                                                    |
| :------------- | :------- | :------------------------------------------------------------- |
| `message`      | _string_ | Error message.                                                 |
| `duplicateOpt` | _string_ | The duplicate option.                                          |
| `count`        | _number_ | Number of times the option was entered (i.e. starting from 2). |

**Returns:** [_DuplicateOptError_](classes_errors.duplicateopterror.md)

Defined in: [src/classes/errors.ts:263](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L263)

## Properties

### count

• **count**: _number_

Number of times the option was entered (i.e. starting from 2).

Defined in: [src/classes/errors.ts:263](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L263)

---

### duplicateOpt

• **duplicateOpt**: _string_

The duplicate option.

Defined in: [src/classes/errors.ts:259](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L259)

---

### message

• **message**: _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'DuplicateOptError'

Defined in: [src/classes/errors.ts:255](https://github.com/prasadrajandran/node-getopts/blob/5821226/src/classes/errors.ts#L255)

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
