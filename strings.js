// const name = "hitesh";
// const repoCount = "50";
// String Concatination (outdated method)
// console.log(name + repoCount + " Value");
// Modern Way of String concatination is String Interpolation
// console.log(`${name} has ${repoCount} repositries in Github.`)

// Another way of declaring a String
// const newName = new String("Nikhil");
// console.log(newName);
// console.log(newName.length);

/*
some useful string methods

toUpperCase - to convert to uppercase
toLowerCase
indexOf
charAt
toString




methods to break string to parts



*/
// let gameName = "HiteshChoudhary";
// const newString = gameName.substring(0, 4);
// console.log(gameName); // HiteshChoudhary

// console.log(newString); // Hite

// const gameName = "hiteshchoudhary";
// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);
// console.log(gameName);
// const newStringOne = "    hitesh    ";
// console.log(newStringOne);
// console.log(newStringOne.trimEnd());

// console.log(`lengt of newStringOne is ${newStringOne.length}`); //14
// console.log(`length of trimmed string is ${newStringOne.trim().length}`); //6
// // .trim() is used to remove starting and ending spaces from the string.

// const url = "https://hitesh.com/hitesh%20choudhary"

// url.replace('%20', '-'); // this does not work as this returns new string does not change in same string.
// console.log(url);
// console.log(url.replace('%20' , ' '));

// const bool = url.includes('hitesh'); // returns a boolean value after checking is the string includes a particular substring or not.
// console.log(bool);


// To split a string to many another strings on based of a character or substring use this method : 
// const str = "this-is-a-string";

// console.log(str.split("-")); // this returns a array which constains many strings seperated from original string, based on seperator passed in .split method as a parameter.



