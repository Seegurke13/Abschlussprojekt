%skip   space          \s
// Scalars.
%token  true           true
%token  false          false
%token  null           null
// Strings.
%token  quote_         "|'        -> string
%token  string:string  [^"]+
%token  string:_quote  "|'        -> default
// Method
%token  identifier     [a-zA-Z]+
// Arrays.
%token  bracket_       \[
%token  _bracket        \]
// Parenthesis
%token  _parenthesis     \)
%token  parenthesis_     \(
// PaulaScript
%token  find            \$
// Rest.
%token  colon          :
%token  semicolon      ;
%token  comma          ,
%token  number         \d+
%token  dot            \.

#expresssion:
    (find() (command())* ::semicolon::)+

#find:
    ::find:: ::parenthesis_:: arguments() ::_parenthesis::

#command:
    ::dot:: <identifier> ::parenthesis_:: arguments() ::_parenthesis::

#arguments:
    (value() ( ::comma:: value() )*)?

value:
    <true> | <false> | <null> | string() | number()

string:
    ::quote_:: <string> ::_quote::

number:
    <number>