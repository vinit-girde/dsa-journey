// Looping Structures in JavaScript

// Write an function that takes an array and a target element as input and returns the index of the target element if found, or -1 if not found.
let arr = [1, 2, 3, 4, 5, 30, 50, 90, 32];

function searchedElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index of the target element
    }
  }
  return -1; // Return -1 if the target element is not found
}

let result = searchedElement(arr, 46);
console.log(result); // Output: -1

// write an function that returns the numbers of negative numbers in an array.

let arrQuestionTwo = [1, -2, 3, -4, 5, -30, 50, -90, 32];

function getNegativeElements(arr) {
  let negativeElementsArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeElementsArray.push(arr[i]);
    }
  }
  return negativeElementsArray; // Return the array of negative elements
}

let resultQuestionTwo = getNegativeElements(arrQuestionTwo);
console.log(resultQuestionTwo); // Output: [-2, -4, -30, -90]

// for getting count of negative numbers in an array
console.log(resultQuestionTwo?.length); // Output: 4

// Write function that returns the largest number in an array.

let array = [1, 2, 3, 4, 5, 30, 50, 99, 32];

function getLargestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let largestNumber = getLargestNumber(array);
console.log(largestNumber); // Output: 90

// write a function that returns the smallest number in an array.

function getSmallestNumber(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(getSmallestNumber(array)); // Output : 1

// Write an function which returns the second largest number in an array.

let sampleArr = [12, 30, 40, 50, 56, 60, 43, 23, 90, 100];

function getSecondlargestNumber(arr) {
  let largestNumber = -Infinity;
  let secondLargestNumber = -Infinity;

  // if array doesn't have 2 or more elements then return null
  if (arr.length < 2) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = arr[i];
    } else if (arr[i] > secondLargestNumber && arr[i] != largestNumber) {
      secondLargestNumber = arr[i];
    }
  }
  return secondLargestNumber;
}

let secondlargestElementFromArr = getSecondlargestNumber(sampleArr);

console.log(secondlargestElementFromArr); // Output : 90

/*** There are some corner cases in above solution :
    - Array is empty.
    - Array has only one element.
    - Array has negative values.
    - Array has duplicate values. 
    
    To fix these, added condition on line number 78 and 86 .
*/

let sampleArrCopy = [12, 30, 40, 50, 56, 60, 43, 23, 92, 100, 100];

console.log(getSecondlargestNumber(sampleArrCopy)); // Output : 92

console.log(getSecondlargestNumber([])); // Output: null
