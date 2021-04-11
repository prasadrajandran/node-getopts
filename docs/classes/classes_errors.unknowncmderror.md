[getopts - v1.0.0-beta.3](../README.md) / [classes/errors](../modules/classes_errors.md) / UnknownCmdError

# Class: UnknownCmdError

[classes/errors](../modules/classes_errors.md).UnknownCmdError

## Hierarchy

- [_ParseError_](classes_errors.parseerror.md)

  ↳ **UnknownCmdError**

## Table of contents

### Constructors

- [constructor](classes_errors.unknowncmderror.md#constructor)

### Properties

- [details](classes_errors.unknowncmderror.md#details)
- [message](classes_errors.unknowncmderror.md#message)
- [name](classes_errors.unknowncmderror.md#name)
- [stack](classes_errors.unknowncmderror.md#stack)
- [prepareStackTrace](classes_errors.unknowncmderror.md#preparestacktrace)
- [stackTraceLimit](classes_errors.unknowncmderror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_errors.unknowncmderror.md#capturestacktrace)

## Constructors

### constructor

\+ **new UnknownCmdError**(`unknownCmd`: _string_, `expectedCmds`: _string_[]): [_UnknownCmdError_](classes_errors.unknowncmderror.md)

Unknown CLI command error.

#### Parameters:

| Name           | Type       | Description                      |
| :------------- | :--------- | :------------------------------- |
| `unknownCmd`   | _string_   | Name of the unknown CLI command. |
| `expectedCmds` | _string_[] | CLI commands that were expected. |

**Returns:** [_UnknownCmdError_](classes_errors.unknowncmderror.md)

Overrides: [ParseError](classes_errors.parseerror.md)

Defined in: [src/classes/errors.ts:31](https://github.com/prasadrajandran/node-getopts/blob/11bb392/src/classes/errors.ts#L31)

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

• **name**: _string_= 'UnknownCmdError'

Overrides: [ParseError](classes_errors.parseerror.md).[name](classes_errors.parseerror.md#name)

Defined in: [src/classes/errors.ts:31](https://github.com/prasadrajandran/node-getopts/blob/11bb392/src/classes/errors.ts#L31)

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
