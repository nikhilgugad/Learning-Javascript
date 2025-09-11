// arrays

// const myArr = [0, 1, 2, 3, 4, 5, true, "hitesh"];

// to access a element by index we can do like this : 
// console.log(myArr[2]);

// if we perform copy operations on arrays it performs a shallow copy not deep copy.
// it means if make a change in a array which points to another array it also changes in that.

// shallow copy -> copy shares the same reference.
// deep copy -> properties do not shares same reference instead they have their own copy.




// declaring arrays
// const heroes = ['shaktiman', 'naagraaj'];
// const heroes2 = new Array(1,2,3,4);
// console.log(heroes);
// console.log(heroes2);


// // Common Array Methods
// const arr = [1, 2, 3, 4, 5];
// arr.push(6); // appends new elements to the array, here 6.
// arr.push(7); // appends 7
// // console.log(arr);

// // arr.pop(); // removes and reutrns the last element from the array.
// // console.log(arr);
// // arr.pop();
// // console.log(arr);
// 
// const arr = [1,2,3,4]
// arr.unshift(0); // adds value to the starting of the array but shifts indexes of all existing value which compromise performance in bigger data.
// console.log(arr);
// arr.shift(); // removes and returns the first element from the array
// console.log(arr);

// console.log(arr.includes(2)); //true
// console.log(arr.includes(9)); // false

// console.log(arr.indexOf(2)); // returns the index of given value in the array.
// console.log(arr.indexOf(10)); // returns -1 if the value does not exists in the array.

// const newArr = arr.join();// returns the new array with all the values converted into string from the original array.
// console.log(newArr);


// // slice, splice
// myArr = [1,2,3,4,5]
// console.log("A ", myArr);
// const myn1 = myArr.slice(1,3); // returns new array starting from given index to just before the given end index like in this it will return from index 1 to 2.
// console.log(myn1);

// // slice does not changes in original array and does not include last given index.
// // splice changes the original and removes range from array and also includes the last given index.

// const marvelHeroes = ["thor", "Ironman", "spiderman"];
// const dcHeroes = ["Superman", "flash", "batman"];

// marvelHeroes.push(dcHeroes);// by directly pushing a array like this in another array it create a array inside a array which creates confusion.
// console.log(marvelHeroes);

// we use concat method to do this kind of work.
//  const allHeroes = marvelHeroes.concat(dcHeroes); // this returns a new array not change in original array.
 
//  console.log(allHeroes);

// we also use spread operator in arrays.
// const allHeroes = [...marvelHeroes, ...dcHeroes]; // this is the way of spreading all the array elements fo a array as a single value.
// // this is called spread operator 
// console.log(allHeroes);


// const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]; // too confusing nested arrays

// const realArr = arr.flat(2) // this returns a new array which gives values of all the arrays inside a array as a single element. we can choose how much depth we want to flat.
// console.log(realArr);

// we can write Infinity to flat all the arrays.


// console.log(Array.isArray("Hitesh"));// checks if given value is a array.

// const myArr = Array.from("Hitesh"); // this returns a new array from given data.
// console.log(myArr);
// this gives empty array if it cant decide what to include in array.

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1,score2,score3)); // returns a new array from passed elements.




