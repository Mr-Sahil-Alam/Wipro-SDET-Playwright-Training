//Merge two arrays and remove duplicates.
function mergeArrays(arr1, arr2) {

  let merged = [...arr1, ...arr2];

  let result = [];

  for (let i = 0; i < merged.length; i++) {

    if (!result.includes(merged[i])) {

      result.push(merged[i]);

    }

  }

  return result;
}

console.log(
  mergeArrays([1, 2, 3], [2, 3, 4])
);