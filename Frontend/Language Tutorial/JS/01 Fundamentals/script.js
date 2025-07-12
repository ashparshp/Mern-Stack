let JS = "Amazing";
if (JS === "Amazing") alert("JS is FUN!");

console.log(40 + 8 + 23 - 10);

let TS; // TS is declared but not initialized Typeof TS will be undefined

const age = 23;

// age = 24; // This will throw an error because 'age' is a constant

// const birthYear; // This will throw an error because 'birthYear' is not initialized

// const age = 24; // This will throw an error because 'age' is already declared

// Template Literals
const firstName = "Ashparsh";
const greeting = `Hello, my name is ${firstName}. I am learning JavaScript.`;
console.log(greeting);

// if statement
const hasDriversLicense = true;
if (hasDriversLicense) {
  console.log("I can drive!");
}

// if statement with else
const hasGoodVision = true;
if (hasDriversLicense && hasGoodVision) {
  console.log("I can drive and have good vision!");
} else {
  console.log("I cannot drive or have poor vision.");
}


// type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18); // Converts string to number but does not change the original string
console.log(String(23)); // Converts number to string
console.log(Number("Ashparsh")); // NaN (Not a Number) because "Ashparsh" cannot be converted to a number
console.log(typeof NaN); // NaN is of type 'number'

// type coercion
console.log("I am " + 23 + " years old."); // Coerces number to string
console.log("23" - "10"); // Coerces strings to numbers and performs subtraction
console.log("23" + "10"); // Concatenates strings
console.log("23" * "2"); // Coerces strings to numbers and performs multiplication
console.log("23" / "2"); // Coerces strings to numbers and performs division