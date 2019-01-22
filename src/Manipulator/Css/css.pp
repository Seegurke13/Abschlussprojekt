%skip   space           \s
%token  semicolon       ;
%token  string          [^;]+

#expression:
    selector() ::semicolon:: action()

#selector:
    <string>

#action:
    <string>