# Utility Syntax Guidelines

Taken from: [The Open Group Base Specifications Issue 7, 2018 edition
IEEE Std 1003.1-2017 (Revision of IEEE Std 1003.1-2008)](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html)

**Guideline 1:**

Utility names should be between two and nine characters, inclusive.

**Guideline 2:**

Utility names should include lowercase letters (the lower character
classification) and digits only from the portable character set.

**Guideline 3:**

Each option name should be a single alphanumeric character (the alnum character
classification) from the portable character set. The -W (capital-W) option shall
be reserved for vendor options. Multi-digit options should not be allowed.

**Guideline 4:**

All options should be preceded by the '-' delimiter character.

**Guideline 5:**

One or more options without option-arguments, followed by at most one option
that takes an option-argument, should be accepted when grouped behind one '-'
delimiter.

**Guideline 6:**

Each option and option-argument should be a separate argument, except as noted
in Utility Argument Syntax, item (2).

**Guideline 7:**

Option-arguments should not be optional.

**Guideline 8:**

When multiple option-arguments are specified to follow a single option, they
should be presented as a single argument, using [comma] characters within that
argument or [blank] characters within that argument to separate them.

**Guideline 9:**

All options should precede operands on the command line.

**Guideline 10:**

The first -- argument that is not an option-argument should be accepted as a
delimiter indicating the end of options. Any following arguments should be
treated as operands, even if they begin with the '-' character.

**Guideline 11:**

The order of different options relative to one another should not matter, unless
the options are documented as mutually-exclusive and such an option is
documented to override any incompatible options preceding it. If an option that
has option-arguments is repeated, the option and option-argument combinations
should be interpreted in the order specified on the command line.

**Guideline 12:**

The order of operands may matter and position-related interpretations should be
determined on a utility-specific basis.

**Guideline 13:**

For utilities that use operands to represent files to be opened for either
reading or writing, the '-' operand should be used to mean only standard input
(or standard output when it is clear from context that an output file is being
specified) or a file named -.

**Guideline 14:**

If an argument can be identified according to Guidelines 3 through 10 as an
option, or as a group of options without option-arguments behind one '-'
delimiter, then it should be treated as such.
