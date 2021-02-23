[getopts - v1.0.0-alpha.4](../README.md) / [classes/errors](../modules/classes_errors.md) / DuplicateOptError

# Class: DuplicateOptError

[classes/errors](../modules/classes_errors.md).DuplicateOptError

## Hierarchy

- _Error_

  ↳ **DuplicateOptError**

## Table of contents

### Constructors

- [constructor](classes_errors.duplicateopterror.md#constructor)

### Properties

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

\+ **new DuplicateOptError**(`message`: _string_, `duplicateOpt`: _string_): [_DuplicateOptError_](classes_errors.duplicateopterror.md)

Duplicate Option Error.

#### Parameters:

| Name           | Type     | Description           |
| :------------- | :------- | :-------------------- |
| `message`      | _string_ | Error message.        |
| `duplicateOpt` | _string_ | The duplicate option. |

**Returns:** [_DuplicateOptError_](classes_errors.duplicateopterror.md)

Defined in: [src/classes/errors.ts:259](https://github.com/prasadrajandran/node-getopts/blob/62e4ad2/src/classes/errors.ts#L259)

## Properties

### duplicateOpt

• **duplicateOpt**: _string_

The duplicate option.

Defined in: [src/classes/errors.ts:259](https://github.com/prasadrajandran/node-getopts/blob/62e4ad2/src/classes/errors.ts#L259)

---

### message

• **message**: _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_= 'DuplicateOptError'

Defined in: [src/classes/errors.ts:255](https://github.com/prasadrajandran/node-getopts/blob/62e4ad2/src/classes/errors.ts#L255)

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
