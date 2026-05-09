//Remove duplicate elements from an array.
function DuplicateNumber(arr) {

  let result = [];

  for (let i = 0; i < arr.length; i++) {

    if (!result.includes(arr[i])) {

      result.push(arr[i]);

    }

  }

  return result;
}

console.log(DuplicateNumber([1, 2, 2, 3, 4, 4]));