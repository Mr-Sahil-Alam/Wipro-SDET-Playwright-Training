// =======================
// VARIABLES
// =======================
let a = 10;        // can change
const b = 20;      // cannot change

// =======================
// DATA TYPES
// =======================
typeof 5;        // number
typeof "hi";     // string
typeof true;     // boolean

// =======================
// STRINGS
// =======================
let name = "Sahil";
console.log(`Hello ${name}`); // template literal

" JS ".trim().toLowerCase(); // "js"

// =======================
// FUNCTIONS
// =======================
function sum(a, b) { return a + b; }
let add = (a, b) => a + b; // arrow function

// =======================
// LOOPS
// =======================
let arr = [1, 2, 3];
arr.forEach(x => console.log(x)); // loop

// =======================
// ARRAY METHODS
// =======================

// filter → select elements
arr.filter(x => x > 1);      // [2,3]

// map → modify elements
arr.map(x => x * 2);         // [2,4,6]

// reduce → combine to single value
arr.reduce((acc, x) => acc + x, 0); // 6

// =======================
// TYPE CONVERSION
// =======================
Number("5");     // 5
String(5);       // "5"
parseInt("10.5");   // 10
parseFloat("10.5"); // 10.5

// =======================
// ARRAY OPERATIONS
// =======================
let colors = ["red", "blue"];

colors.push("green");    // add end
colors.pop();            // remove end
colors.unshift("black"); // add start
colors.shift();          // remove start

// splice → remove elements
colors.splice(1, 1);

// =======================
// SEARCH
// =======================
colors.includes("red"); // true
colors.indexOf("blue"); // index

// =======================
// MATH
// =======================
Math.floor(Math.random() * 100) + 1; // 1–100

// =======================