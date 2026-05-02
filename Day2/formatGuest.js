/*Question 1: The Guest List Formatter Goal: Practice Template Literals and Array Methods.
Write a function called formatGuests that takes an array of names.
The function should: Remove the first name from the list (it’s the host, not a guest).
Add "Guest: " before each remaining name using .map().
Return a single string where each guest is on a new line.
*/

function formatGuests(names) {
  names.shift(); // remove first name (host)

  let guests = names.map(name => `Guest: ${name}`);

  return guests.join("\n");
}

// Example
let list = ["Sahil", "Aaryan", "Arush", "Arushi"];
console.log(formatGuests(list));