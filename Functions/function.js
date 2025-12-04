//functions are logic that can be used later in the program
//functions are defined using the function keyword
//anywhrere in the code


//function with no parameters  
function greet() {
    console.log("Welcome to CSE370!");
}
greet()

//bla bla bla

//function with parameters
function sum(a, b) {
     console.log(a + b);
}
sum(5, 10)
sum(20, 30)

//function with return type
function multiply(x, y) {
    return x * y;
}
let result = multiply(5, 4);
console.log(result);

//function as parameter
function printparameter(variable) {
    console.log(variable);

}

//console.log(printparameter)

function fun(x,a){
    x(a);
}

fun(printparameter, "Hello Monowar");


function callback(a,b,func){
    func(a+b);
}
function handlesum(x){
    console.log(x);
}

callback(5,10,handlesum);

//arrow function
function sum(a,b){
    return a+b;
}

// let summArrow(a,b) =>
let summArrow = (a,b) => a+b;
//     return a+b;
// }

console.log(summArrow(10,20))

//hoisting in function
//Hoisting in JavaScript is a mechanism where variable and function declarations are conceptually moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use a variable or call a function before it is declared in the code. 
function fun(a,b){
    console.log(a+b);
}
fun(5,11)


console.log("End of function.js");