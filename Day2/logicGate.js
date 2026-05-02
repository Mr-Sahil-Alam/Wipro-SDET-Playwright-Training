/*
Question 2:
The Logic Gate (Filter & Math) Goal: Practice Arrow Functions, filter, and Math methods.
Create an arrow function called getHighNumbers.
It should take an array of mixed types (strings and numbers) and:
Filter the array to keep only the numbers.
Filter those numbers again to only keep ones greater than a random threshold between 1 and 50.
Return the final array.

*/

let getHighNumbers = (arr) => {
  let threshold = Math.floor(Math.random() * 50) + 1;

  return arr
    .filter(x => typeof x === "number")
    .filter(x => x > threshold);
};

// Example
let data = [10, "hi", 25, 60, "ok", 45, 5];

let result = getHighNumbers(data);
console.log(result);