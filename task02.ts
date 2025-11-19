// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = "42";
// Try changing to "hello", 10, null, NaN

// Solution by K.ITT
if (typeof userInput === 'number' && !isNaN(userInput)){
    console.log(`T :${userInput} <- This is Number`);
}else{
    console.log(`F :${userInput} <-This is not number /is NaN`);
}

// Solution by Gemini
// if (typeof userInput === 'number') {
     // กรณีที่ 1: เป็น number ตรงๆ (เช่น 10)
//     if (isNaN(userInput as number)) {
//         console.log("Input is NaN (Not a Number) - not a valid number.");
//     } else {
//         console.log(`Input is a valid number: ${userInput}`);
//     }
// } else if (typeof userInput === 'string') {
     // กรณีที่ 2: เป็น string ลองแปลงเป็น number ก่อน
//     const parsedNumber = Number(userInput);
//     if (isNaN(parsedNumber)) {
//         console.log(`Input is a string ("${userInput}") that cannot be converted to a number.`);
//     } else {
//         console.log(`Input is a string ("${userInput}") successfully converted to number: ${parsedNumber}`);
//     }
// } else {
     // กรณีที่ 3: เป็น type อื่นๆ ที่ไม่ต้องการ
//     console.log(`Input is not a number or a convertible string. Type is: ${typeof userInput}`);
// }