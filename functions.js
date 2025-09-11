// function sayMyName(){
//     console.log("h");
//     console.log("i");
//     console.log("t");
//     console.log("e");
//     console.log("s");
//     console.log("h");
// } // A simple way of writing a function in javascript.


// sayMyName(); // this is used to execute/call the function.
// sayMyName; // this is used to return function definition/reference.

// function addTwoNums(a, b){
//     console.log(a+b);
    
//     return a + b; // return keyword is used to return a some value when this function is executed and we need to hold that value in a variable to use it.
//      no statement will be executed after we use return keyword.
// }



// addTwoNums(2,5);   // simple function to add two numbers

// this will return NaN if we dont give a number as a input in this funciton.

// when writing a function the variables in paranthesis are called parameters.
// when calling a function with some values those values are called arguments.

// if you dont pass a value to a function which requires parameters or arguments it will take value of those variables as undefined.


// we can give some defauly value to a parameter which is considered if function is called without any argument.
// function greet(name = "Dear"){
//     console.log(`${name}!, Welcome to this application `)
// }
// greet();

// if there is a case in which we cant decide how many arguments we need to take or it changes every time than we use rest operator
// rest operator is just like spread we need to use ... before a parameter name.
// this gives us all the arguments in a array and than we can use that array to looop and use those values.
