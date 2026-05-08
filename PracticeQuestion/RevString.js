//Reverse a string without using built-in reverse methods.
function Revstring(str) {

  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {

    result += str[i];

  }

  return result;
}

console.log(Revstring("hello"));