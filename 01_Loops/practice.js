// Write an function that takes an array and a target element as input and returns the index of the target element if found, or -1 if not found.

// Write an function that returns the numbers of negative numbers in an array.

// Write function that returns the largest number in an array.

// Write a function that returns the smallest number in an array.

// Write an function which returns the second largest number in an array.

let arr = [11, 22, 44, 54, 6, 20, 50, -1, 100, 99, 99, 100];

/*  Solution 1)
function findElementFromArray(arr, targetElement) {
  if (!Array.isArray(arr)) throw new TypeError("First argument must be an array");

  for (let i = 0; i < arr.length; i++) {
    // Object.is() safely checks equality, including NaN
    if (Object.is(arr[i], targetElement)) {
      return i;
    }
  }
  return -1;
}

console.log(findElementFromArray(arr, 33)); // Output : -1
console.log(findElementFromArray(arr, 30)); // Output : -1
console.log(findElementFromArray(arr, 22)); // Output : 1
console.log(findElementFromArray(arr, -1)); // Output : 7
console.log(findElementFromArray(arr, 99)); // Output : 9 */

/* Solution 2)
function countNegativeNumber(arr) {
  if (!Array.isArray(arr)) return 0;

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // Ensure it's actually a number type before comparing
    if (typeof arr[i] === 'number' && arr[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log(countNegativeNumber(arr)); // Output : 1 */

/* Solution 3)
function findLargestNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  let largestNumber = arr[0];
  // Start at index 1 since we already grabbed index 0
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

console.log(findLargestNumber(arr)); // Output: 100
 */

/*  Solution 4)
function findSmallestNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  let smallestNumber = arr[0]; // Aligning with the largestNumber logic
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }
  return smallestNumber;
}

console.log(findSmallestNumber(arr)); // Output : -1
*/

/* Solution 5)
function findSecondLargestNumber(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return undefined;

  let largestNumber = -Infinity;
  let secondLargestNumber = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') continue; // Skip non-numbers

    if (arr[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = arr[i];
    } else if (arr[i] > secondLargestNumber && arr[i] !== largestNumber) {
      secondLargestNumber = arr[i];
    }
  }
  
  // If secondLargest never changed from -Infinity, there was no second largest
  return secondLargestNumber === -Infinity ? undefined : secondLargestNumber;
}

console.log(findSecondLargestNumber(arr)); // Output : 99
 */
