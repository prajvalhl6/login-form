// const username = "prajvalhl@xyramsoft.com";

// let input = prompt("Enter you username?");

// let userConfirm = confirm(`Are you sure about the entered username: ${input}?`);

// if (userConfirm) {
//   username === input
//     ? alert("User Name Matched, Welcome to our site!")
//     : alert("User Name mismatch! You are not allowed to come in");
// }

// const userInput = Number(prompt("Enter number of time to check fizz buzz"));
// const fizz = "fizz";
// const buzz = "buzz";

// function printFizzBuzz() {
//   for (let i = 1; i <= userInput; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`${i}: ${fizz}${buzz}`);
//     } else if (i % 3 === 0) {
//       console.log(`${i}: ${fizz}`);
//     } else if (i % 5 === 0) {
//       console.log(`${i}: ${buzz}`);
//     } else {
//       console.log(i);
//     }
//   }
// }

// printFizzBuzz();

// // star pattern
// let n = 5;
// let str1 = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     str1 += "*";
//   }
//   str1 += "\n";
// }
// console.log("Star Pattern");
// console.log(str1);

// // hollow box
// let str2 = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (i === 0 || i === n - 1) {
//       str2 += "8";
//     } else if (j === 0 || j === n - 1) {
//       str2 += "8";
//     } else {
//       str2 += " ";
//     }
//   }
//   str2 += "\n";
// }
// console.log("Hollow pattern");
// console.log(str2);

// // box pattern
// let str3 = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     str3 += "*";
//   }
//   str3 += "\n";
// }
// console.log("box Pattern");
// console.log(str3);

// print even numbers from 0 - 10
function printEvenNumbers() {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

function isDivisibleBy10(number) {
  if (number % 10 === 0) {
    return true;
  }
  return number;
}

// function howManyVowels(str) {}

// paginate by prajval
function paginate(noOfItemsPerPage, data) {
  let dataToShow = [];
  let noOfPages = Math.ceil(data.length / noOfItemsPerPage);
  for (let i = 0; i <= data.length; i += noOfItemsPerPage) {
    dataToShow.push(data.slice(i, i + noOfItemsPerPage));
  }
  return { dataToShow, noOfPages };
}

// let message = "hello";
// let phrase = message;
// console.log(message, phrase); // hello hello
// message = "hi";
// console.log(message, phrase); // hi hello

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);

function reverseArray(arr) {
  let reverseArr = [];
  let j = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr[j] = arr[i];
    j++;
  }
  console.log(reverseArr);
}

reverseArray(arr);
