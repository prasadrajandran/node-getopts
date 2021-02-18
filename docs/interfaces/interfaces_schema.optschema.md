[@prasadrajandran/getopts](../README.md) / [interfaces/schema](../modules/interfaces_schema.md) / OptSchema

# Interface: OptSchema

[interfaces/schema](../modules/interfaces_schema.md).OptSchema

Schema for an option.

## Table of contents

### Properties

- [arg](interfaces_schema.optschema.md#arg)
- [argFilter](interfaces_schema.optschema.md#argfilter)
- [longName](interfaces_schema.optschema.md#longname)
- [name](interfaces_schema.optschema.md#name)

## Properties

### arg

• `Optional` **arg**: _undefined_ \| _required_ \| _optional_

Does the option accept an argument? If so, is the argument required or
optional.
Note: It is automatically assumed that the option takes an argument if
this property is defined.

Defined in: [interfaces/schema.ts:43](https://github.com/prasadrajandran/ngetopts/blob/bd18eb5/src/interfaces/schema.ts#L43)

---

### argFilter

• `Optional` **argFilter**: _undefined_ \| [_OptArgFilter_](interfaces_schema.optargfilter.md)

Pass the option's argument through a filter for processing.
E.g. convert it to a number, etc.

Defined in: [interfaces/schema.ts:48](https://github.com/prasadrajandran/ngetopts/blob/bd18eb5/src/interfaces/schema.ts#L48)

---

### longName

• `Optional` **longName**: _undefined_ \| _string_

Long name of the option.
E.g.: "--sort-by", "--append", etc.

Defined in: [interfaces/schema.ts:36](https://github.com/prasadrajandran/ngetopts/blob/bd18eb5/src/interfaces/schema.ts#L36)

---

### name

• `Optional` **name**: _undefined_ \| _string_

Name of the option.
E.g.: "-a", "-A", etc.

Defined in: [interfaces/schema.ts:31](https://github.com/prasadrajandran/ngetopts/blob/bd18eb5/src/interfaces/schema.ts#L31)
