console.log("Javascript: var, let and const");
var a;
a = 10;
a = 30;
{
var a = 20; 
a = 40;
console.log(a);
}
console.log(a);

let b;
b = 10;
{
    let b = 20;
    //let b =30; we cannot redeclare in let
    console.log(b);
}
console.log(b);

const pi = 3.14;
console.log(pi);

//const pi; Not allowed
//pi = 3.14; Not allowed
//pi = 4.5; Not allowed