%skip   space           \s
%token  semicolon       ;
%token  equals
%token  string          [^;]+

#expression:
    selector() ::equals:: action() ::semicolon::

#selector:
    <string>

#action:
    <string>