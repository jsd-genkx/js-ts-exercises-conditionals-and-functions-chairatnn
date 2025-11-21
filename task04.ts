// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// TODO BONUS: Rewrite with if

const num = 15;

// My Solution
// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("FizzBuzz");    // หาร 3 และ 5 ลงตัว
// } else if (num % 3 === 0) {
//     console.log("Fizz");        // หารด้วย 3 ลงตัว
// } else if (num % 5 === 0) {
//     console.log("Buzz");        // หารด้วย 5 ลงตัว
// } else {
//     console.log("Not divisible by 3 or 5");     // หารด้วย 3 หรือ 5 ไม่ลงตัว
// }

// ย้าย logic มาใส่ใน function
const fizzBuzz = (number: number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz"); // หาร 3 และ 5 ลงตัว
  } else if (number % 3 === 0) {
    console.log("Fizz"); // หารด้วย 3 ลงตัว
  } else if (number % 5 === 0) {
    console.log("Buzz"); // หารด้วย 5 ลงตัว
  } else {
    console.log("Not divisible by 3 or 5"); // หารด้วย 3 หรือ 5 ไม่ลงตัว
  }
};

    fizzBuzz(5)

    const fizzBuzz2 = fizzBuzz

    fizzBuzz2(15)

// Example Test Cases
fizzBuzz(15) // "FizzBuzz"
fizzBuzz(9) // "Fizz"
fizzBuzz(10) // "Buzz"
fizzBuzz(7) // "Not divisible by 3 or 5"