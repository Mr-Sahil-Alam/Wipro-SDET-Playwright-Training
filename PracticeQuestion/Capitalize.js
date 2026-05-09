//Capitalize first letter of every word in a sentence.
function capitalizeWords(str) {

  let words = str.split(" ");

  let result = words.map(word => {

    return word[0].toUpperCase() + word.slice(1);

  });

  return result.join(" ");
}

console.log(capitalizeWords("my name is khan"));