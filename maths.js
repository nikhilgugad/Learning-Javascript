// maths is a inbuilt library of javascript which is used to perform many mathematical operations.

// Math is a js object which contains many predefined functions.

// some common maths functions and methods are : 
//console.log(Math.abs(-4)); // converts this to a absolute value which means a positive value

//console.log(Math.round(4.3)); // used to round off value based on nearest value.


// to round of to nearest upper value we use Math.ceil 
//console.log(Math.ceil(4.3)); // 5

// to round of to nearest lower value we use Math.floor
//console.log(Math.floor(4.3)); //5

// Math.min and Math.max are used to find minimum and maximum values from the given range of numbers.



//-----------------------------------------------------------------
//          ***Math.random*** //
// Math.random returns a random value between 0 and 1 
// console.log(Math.random());

// to avoid getting a 0 we use Math.random+1 to produce minimum 1.
// to get a random value bigger than 1 we multiply math.random accordingle like this 

// console.log(Math.floor(Math.random()*10000)); // this will give a 4 digit non decimal random number.

// commonly used formula to use Math.random to get a random value between given numbers
// define two numbers min and max first

// const min = 10;
// const max = 20;

// const randomNum = Math.floor((Math.random() * (max - min + 1)) + min);
// console.log(randomNum);



