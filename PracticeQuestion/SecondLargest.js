//Find the second largest number in an array.
function secondLargestr(arr) {

  let largest = arr[0];
  let secondLargest = largest;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > largest) {

      largest = arr[i];

    }

  }

  return secondLargest;
}
console.log(secondLargestr([1, 3, 12, 45, 23]));
