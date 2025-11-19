// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// TODO BONUS: Rewrite with if

const num = 15;

// My Solution
if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");    // หาร 3 และ 5 ลงตัว
} else if (num % 3 === 0) {
    console.log("Fizz");        // หารด้วย 3 ลงตัว
} else if (num % 5 === 0) {
    console.log("Buzz");        // หารด้วย 5 ลงตัว
} else {
    console.log("Not divisible by 3 or 5");     // หารด้วย 3 หรือ 5 ไม่ลงตัว
}