/*
### **Level 4: Advanced Scenarios** **
7.Array Transformation** Given an array of numbers [1, 2, 3, 4, 5, 6],
use a combination of .filter() and .map() to: 1. Keep only the even numbers.
2.Square those even numbers (e.g., 2 becomes 4, 4 becomes 16).
*/



let nums = [1, 2, 3, 4, 5, 6];

let result = nums
  .filter(x => x % 2 === 0)
  .map(x => x * x);

console.log(result);