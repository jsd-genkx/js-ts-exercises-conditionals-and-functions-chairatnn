// TODO-03: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

const password: string = "pass123";

// My Solution
const letter = password.length; // นับความยาวตัวอักษรของรหัสผ่าน

if (letter < 6) {
    console.log(`Password: "${password}" (${letter} chars) -> Too short`); // ความยาวน้อยกว่า 6 ตัวอักษรให้พิมพ์
} else if (letter >= 6 && letter <= 10) {
    console.log(`Password: "${password}" (${letter} chars) -> Moderate`);   // หากความยาว 6 ถึง 10 ตัวอักษรให้พิมพ์
} else {
    console.log(`Password: "${password}" (${letter} chars) -> Strong`); // หากความยาว >= 11 ให้พิมพ์
}