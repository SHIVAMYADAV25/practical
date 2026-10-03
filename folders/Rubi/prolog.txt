%batsman(sachin).


%cricketer(X):-batsman(X).


%student(shivam).
%student(priya).
%student(hema).


%likes(shivam,programming).
%likes(priya,ai).
%likes(hema,programming).

%programming(X):-student(X),likes(X,programming).
%ai(X):-student(X),likes(X,ai).




male(shivam).
male(ravi).
male(rohan).
male(amit).
male(shub).

female(sita).
female(gita).
female(rita).
female(babita).
female(neha).

parent(shivam,ravi).
parent(sita,ravi).

parent(shivam,gita).
parent(sita,gita).

parent(amit,shub).
parent(babita,shub).

parent(amit,rita).
parent(babita,rita).

parent(ravi,rohan).
parent(gita,neha).


%father
father(X,Y):-
    male(X),
    parent(X,Y).

mother(X,Y):-
    female(X),
    parent(X,Y).

grandfather(X,Y):-
    male(X),
    parent(X,Z),
    parent(Z,Y).

grandmother(X,Y):-
    female(X),
    parent(X,Z),
    parent(Z,Y).

brother(X,Y):-
    male(X),
    parent(Z,X),
    parent(Z,Y),
    X \= Y.

sister(X,Y):-
    female(X),
    parent(Z,X),
    parent(Z,Y),
    X \= Y.

uncle(X,Y):-
    male(X),
    parent(Z,Y),
    brother(X,Z).

aunt(X,Y):-
    female(X),
    parent(Z,Y),
    siste(X,Z).

nephew(X,Y):-
    male(X),
    (brother(Z,Y) ; sister(Z,Y)),
    parent(Z,X).

niece(X,Y):-
    female(X),
    (brother(Z,Y);sister(Z,Y)),
    parent(Z,X).

cosin(X,Y):-
    parent(A,X),
    parent(B,Y),
    (brother(A,B) ; sister(A,B)),
    X \= y.



