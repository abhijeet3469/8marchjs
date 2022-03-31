// Functions:- Reusable block of codes. If there is a block of code that we want to re-use, we put that block of code inside
// a function.
// function abc(){ //function definition
    // code block for the function
    // console.log("inside abc");
// }
// to run the block of code inside function, i need to execute or call the function.
// abc()  //function execution or function call
// -----------------------------------------------------------------------------------------------------------------------------
// function using parameter
// function add(a, b){ // 4,4 // parameters
//     console.log(a + b);
// }
// add(4, 4); // arguments
// -----------------------------------------------------------------
// function using return keyword
// function add(a, b){
//     return a + b;
// }
// let result = add(6, 4);
// console.log(result);
// one more way using return keyword
// function add(a, b){
//     return a + b;
// }
// console.log(add(6, 4)); // --> This function call essentially becomes a value, which is returned over line no.2. So I am
// consoling that returned value.
// There are two ways for function end:- 1. last line without return and 2. return
// Q:- What does return keyword do?
// Ans:- 1. It returns the value and 2. It ends the function execution.
// ---------------------------------------------------------------------------------------------
// Scope of variable, scope chain:-
// Scope of variable:- Position of variable where it lies or where variable is usable or where variable is present.
// e.g.
// function abc(){ // scope of a and b is abc function or function definition i.e. a and b is present inside the function.
    // var a = 10;
    // var b = 20;
    // console.log(a,b, "inside abc");
// }
// var x = 10; // scope of x is global.
// abc();
// console.log(a,b, "inside global");
// Q:- If I try to console abc inside global, is it possible?
// Ans:- Reference Error.
// e.g.
// function abc(){
    // var a = 10;
    // var b = 20;
    // console.log(a,b, "inside abc");
    // console.log(x);
// }
// var x = 10;
// abc();
// console.log(a,b, "inside global");
// var x is global scope (parent scope) which is parent of function and able to access inside child function.