//Check whether a number is an Armstrong number.
function Armstrong(num) {

  let original = num;

  let sum = 0;

  while (num > 0) {

    let digit = num % 10;

    sum = sum + Math.pow(digit, 3);

    num = Math.floor(num / 10);

  }

  if (sum === original) {

    return true;

  }

  return false;
}

console.log(Armstrong(153));