//Generate a random number between 1 and 100.
function randomNumber() {

  let result =
    Math.floor(Math.random() * 100) + 1;

  return result;
}

console.log(randomNumber());