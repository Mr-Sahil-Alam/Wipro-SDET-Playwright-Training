/*
### **Level 3: The Power of Reduce
5. Total Cost** Given an array of prices [19.99, 5.50, 3.99, 25.00],
use .reduce() to calculate the total sum of the items.
*/

let prices = [19.99, 5.50, 3.99, 25.00];

let total = prices.reduce((acc, x) => acc + x, 0);
console.log(total);