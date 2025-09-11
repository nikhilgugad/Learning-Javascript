//        *** Objects are most important in JavaScript  ****          //

// declaring a object
const jsUser = {
    name: "hitesh",
    age : "18",
    location : "jodhpur",
    email : "someone@example.com",
    isLoggedIn : false,
    lastLoginDays : ['monday', 'saturday'],
    "full name" : "Hitesh Choudhary" // this value cant be accessed by jsUser.fullname.
}; // object literals

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



