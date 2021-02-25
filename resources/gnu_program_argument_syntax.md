# Program Argument Syntax Conventions

Taken from: [25.1.1 Program Argument Syntax Conventions](https://www.gnu.org/software/libc/manual/html_node/Argument-Syntax.html)

- Arguments are options if they begin with a hyphen delimiter ("-").

- Multiple options may follow a hyphen delimiter in a single token if the
  options do not take arguments. Thus, "-abc" is equivalent to "-a -b -c".

- Option names are single alphanumeric characters.

- Certain options require an argument. For example, the "-o" command of the ld
  command requires an argument—an output file name.

- An option and its argument may or may not appear as separate tokens. (In
  other words, the whitespace separating them is optional.) Thus, "-o foo" and
  "-ofoo" are equivalent.

- Options typically precede other non-option arguments.

- The argument "--" terminates all options; any following arguments are treated
  as non-option arguments, even if they begin with a hyphen.

- A token consisting of a single hyphen character is interpreted as an ordinary
  non-option argument. By convention, it is used to specify input from or output
  to the standard input and output streams.

- Options may be supplied in any order, or appear multiple times. The
  interpretation is left up to the particular application program.
  - Note: [@prasadrajandran/getopts](https://github.com/prasadrajandran/node-getopts)
    will generate an error if an option appears multiple times. Users may choose
    to ignore it.

GNU adds long options to these conventions. Long options consist of "--"
followed by a name made of alphanumeric characters and dashes. Option names are
typically one to three words long, with hyphens to separate words. Users can
abbreviate the option names as long as the abbreviations are unique.

To specify an argument for a long option, write "--name=value". This syntax
enables a long option to accept an argument that is itself optional.
