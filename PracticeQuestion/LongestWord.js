//Find the longest word in a sentence.
function longestWord(str) {

  let words = str.split(" ");

  let longest = words[0];

  for (let i = 1; i < words.length; i++) {

    if (words[i].length > longest.length) {

      longest = words[i];

    }

  }

  return longest;
}

console.log(longestWord("I love JavaScript programming"));