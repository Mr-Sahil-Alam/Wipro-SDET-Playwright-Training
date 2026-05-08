//Count the number of vowels in a string.
//"aeiou".includes(str[i])
function countVowels(str) {

  let result = 0;

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {

    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {

      result++;

    }

  }

  return result;
}

console.log(countVowels("Javascript"));