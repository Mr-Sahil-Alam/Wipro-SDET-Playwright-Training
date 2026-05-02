/*
Question 3: The Price Calculator Goal: Practice Type Conversion and splice.
You have an array of prices, but they are currently strings.
Write a script that:Removes the last item in the array using an array method 
(because it's a "handling fee" you want to calculate separately).
Converts the remaining string prices into actual numbers.
Calculates the sum of those numbers using an arrow function.
Prints: "Total Price: $[sum]" using a template literal.
*/

let prices = ["100", "200", "300", "50"]; // last = handling fee

// Step 1: remove last item
let handlingFee = prices.splice(-1, 1);

// Step 2: convert remaining to numbers
let nums = prices.map(x => Number(x));

// Step 3: calculate sum
let sum = nums.reduce((acc, x) => acc + x, 0);

// Step 4: print result
console.log(`Total Price: $${sum}`);