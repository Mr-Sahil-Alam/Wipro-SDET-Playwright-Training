/*6.Counting Occurrences** Use .reduce() to count how many times the word "apple" appears 
in this array: ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'].*/

let fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];

let count = fruits.reduce((acc, x) => {
  return x === "apple" ? acc + 1 : acc;
}, 0);

console.log(count);