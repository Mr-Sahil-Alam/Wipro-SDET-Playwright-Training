//Find the largest and smallest number in an array.
function LargestNumber(arr) {

  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > largest) {

      largest = arr[i];

    }

  }

  return largest;
}


function smallestNumber(arr) {

  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] < smallest) {

      smallest = arr[i];

    }

  }

  return smallest;
}

console.log(LargestNumber([1, 3, 12, 45, 23]));

console.log(smallestNumber([1, 3, 12, 45, 23]));
