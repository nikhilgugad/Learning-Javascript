//        *** Objects are most important in JavaScript  ****          //

// declaring a object
// const jsUser = {
//     name: "hitesh",
//     age : "18",
//     location : "jodhpur",
//     email : "someone@example.com",
//     isLoggedIn : false,
//     lastLoginDays : ['monday', 'saturday'],
//     "full name" : "Hitesh Choudhary" // this value cant be accessed by jsUser.fullname.
// }; // object literals

// ways of accessing a object value

// console.log(jsUser.email); 
// console.log(jsUser["email"]); // we need to give input key as a string in this method.


// jsUser.email = "email.email.com"; // used to change values
// console.log(jsUser);


// Object.freeze(jsUser); // now no one can change values of this object.


// jsUser.greeting = function(){
//     console.log(`hello ${this.name}`);
// } // adding a new key to the object as a function
// *** this keyword is used 

// jsUser.greeting(); // using the function of from object
// jsUser.greeting // if we dont add () this returns a function reference and does not execute the function.


















// declaring a object using constructor
// Object.create(); // Singleton

// const tinderUser = new Object();

// tinderUser.id = "123abc";
// tinderUser.name = "Sammy";
// tinderUser.isLoggedIn = false;


// console.log(Object.keys(tinderUser)); // return an array of all the keys of a object.
// console.log(Object.values(tinderUser)); // return an array of all the values of a object.
// console.log(Object.entries(tinderUser)); // return an array of all the individual key value pairs as a array.

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // returs a boolean on the basis of if it has the specified property.






// const regularUser = {
//     email : "some@gmail.com",
//     fullname : {
//         userFullName : {
//             firstName : "Hitesh",
//             lastName : "Choudhary"
//         }
//     }
// }

// console.log(regularUser);


// const obj1 = {
//     1 : "a",
//     2 : "b"
// }

// const obj2 = {
//     3 : "c",
//     4 : "d"
// }

// // const obj3 = {obj1, obj2}; 
// // console.log(obj3);

// // const obj3 = Object.assign({}, obj1, obj2);
// // console.log(obj3);

// const obj3 = {...obj1, ...obj2};
// console.log(obj3);
