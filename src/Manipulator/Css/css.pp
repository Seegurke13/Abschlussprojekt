%skip   space           \s
%token  semicolon       ;
%token  end             !
%token  string          [^;]+

#expression:
    selector() ::equals:: action() ::end::

#selector:
    <string>

#action:
    <string>