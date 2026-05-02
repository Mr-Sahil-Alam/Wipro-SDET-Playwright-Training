// ===== STRINGS =====
let name = "Sahil";
console.log(`Hello ${name}`); // template literal

// ===== FUNCTIONS =====
function sum(a, b) { return a + b; }
let add = (a, b) => a + b; // arrow function

// ===== ARRAY LOOP =====
let arr = [1, 2, 3];
arr.forEach(x => console.log(x)); // loop

// ===== ARRAY METHODS =====
arr.filter(x => x > 1);      // filter
arr.map(x => x * 2);         // map
arr.reduce((a, b) => a + b); // sum

// ===== TYPE CHECK =====
typeof 5;        // number
typeof "hi";     // string

// ===== TYPE CONVERSION =====
Number("5");     // 5
String(5);       // "5"

// ===== ARRAY OPERATIONS =====
let colors = ["red", "blue"];
colors.push("green");    // end
colors.pop();            // remove end
colors.unshift("black"); // start
colors.shift();          // remove start

// ===== SEARCH =====
colors.includes("red"); // true
colors.indexOf("blue"); // index

// ===== RANDOM =====
Math.floor(Math.random() * 100) + 1;