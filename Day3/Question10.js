/*
10. Flattening (The Bonus)**
Without using the built-in .flat() method, use .reduce() to turn this 
nested array into a single flat array: [[1, 2], [3, 4], [5, 6]] → [1, 2, 3, 4, 5, 6]
*/

let arr = [[1, 2], [3, 4], [5, 6]];

let flat = arr.reduce((acc, x) => acc.concat(x), []);

console.log(flat);