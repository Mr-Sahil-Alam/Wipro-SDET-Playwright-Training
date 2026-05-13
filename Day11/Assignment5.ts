/*
Template Literal Types for CSS
Scenario:You are building a UI library and want to strictly enforce unit types for a "spacing"prop.
Task: Create a type MarginValue that only allows strings ending in "px", "rem", or "vh"
 (e.g., "10px", "2rem"). Use Template Literal Types to ensure a number must precede the unit.

*/
type MarginValue =
    `${number}px`
    | `${number}rem`
    | `${number}vh`;


let m1: MarginValue = "10px";

let m2: MarginValue = "2rem";

let m3: MarginValue = "50vh";


// ❌ Errors

// let m4: MarginValue = "abc";

// let m5: MarginValue = "20pt";

// let m6: MarginValue = "px";