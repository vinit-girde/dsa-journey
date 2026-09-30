function countDigits(n) {
  if (n === 0) return 1;
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigits(259)); // 3

// Write an function which will reverse an number
function reverseInteger(n) {
  let reversed = 0;
  let isNegative = n < 0;

  // Work with the absolute value to handle negatives smoothly
  n = Math.abs(n);

  // Loop runs until we completely strip down the original number
  while (n > 0) {
    let lastDigit = n % 10; // 1. Isolate the last digit
    reversed = reversed * 10 + lastDigit; // 2. Append it to the result
    n = Math.floor(n / 10); // 3. Remove the last digit from n
  }

  return isNegative ? -reversed : reversed;
}

// Test cases
console.log(reverseInteger(1234)); // Output: 4321
console.log(reverseInteger(-567)); // Output: -765
