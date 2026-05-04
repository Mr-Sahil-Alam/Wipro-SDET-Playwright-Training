/*
**Level 5: Logic Challenges** **9. The Average** Write a short script 
using .reduce() to find the average score from an array of test results: [80, 90, 70, 100].

*/



let scores = [80, 90, 70, 100];

let avg = scores.reduce((acc, x) => acc + x, 0) / scores.length;

console.log(avg);