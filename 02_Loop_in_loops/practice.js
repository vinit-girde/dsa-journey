/* Solution 1 : */

// Common value of of n variable across all solutions
let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += " *";
  }
  console.log(row);
}

/* Solution - 2 */

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += " *";
  }
  console.log(row);
}

/* Solution - 3 */

for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row += j + 1 + " ";
  }
  console.log(row);
}

/* Solution -4  */

for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row += i + 1 + " ";
  }
  console.log(row);
}

/* Solution - 5 */
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n - i; j++) {
    row += j + 1 + " ";
  }
  console.log(row);
}

/* Solution - 6 */

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i - 1; j++) {
    row += "  ";
  }
  for (let k = 0; k <= i; k++) {
    row += "* ";
  }
  console.log(row);
}

/* Solution - 7 */

for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j <= i; j++) {
    row += toggle + " ";
    toggle = toggle === 1 ? 0 : 1;
  }

  console.log(row);
}

/* Solution - 8  */
let toggle = 1;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += toggle + " ";
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}
