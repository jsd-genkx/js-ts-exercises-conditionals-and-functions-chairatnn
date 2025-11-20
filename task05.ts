// TODO-05: Convert this if to switch/case (You can add more options.)
// TODO BONUS: Use object lookup

const fruit: string = "BaNaNa";

// if (fruit === "apple") {
// 	console.log("An apple a day keeps the doctor away.");
// } else if (fruit === "banana") {
// 	console.log("Banana is good for potassium.");
// } else if (fruit === "orange") {
// 	console.log("Oranges are full of vitamin C.");
// } else {
// 	console.log("Unknown fruit.");
// }

// My Solution
const fruitInput = fruit.toLowerCase(); // แก้ปัญหา case-sensitive
switch (fruitInput) {
  case "apple":
    console.log("An apple a day keeps the doctor away.");
    break;
  case "banana":
    console.log("Banana is good for potassium.");
    break;
  case "orange":
    console.log("Oranges are full of vitamin C.");
    break;
	default:
    console.log("Unknown fruit.");
}

// Solution by K.Man
// let fruit = "Apple";
// switch (fruit.toLowerCase()){
//     case "apple":
//         console.log("An apple a day keeps the doctor away.");
//     break;
//     case "banana":
//         console.log("Banana is good for potassium.");
//     break;
//     case "orange":
//         console.log("Oranges are full of vitamin C.");
//     break;
//     default:
//     console.log("Unknown fruit.");
// }