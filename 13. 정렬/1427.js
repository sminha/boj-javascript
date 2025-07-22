// 1. sort 풀이
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);

console.log(input.sort((a, b) => b - a).join(''));

// 2. 버블정렬 풀이
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);

// for (let i = 0; i < input.length; i++) {
//   for (let j = 0; j < input.length - 1 - i; j++) {
//     if (input[j] < input[j + 1]) {
//       [input[j], input[j + 1]] = [input[j + 1], input[j]];
//     }
//   }
// }

// console.log(input.join(''));

// 3. 선택정렬 풀이
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);

// console.log(input);

// for (let i = 0; i < input.length; i++) {
//   let maxIdx = i;
//   for (let j = i + 1; j < input.length; j++) {
//     if (input[maxIdx] < input[j]) {
//       maxIdx = j;
//     }
//   }
//   [input[i], input[maxIdx]] = [input[maxIdx], input[i]];
// }

// console.log(input.join(''));

// 4. 삽입정렬 풀이
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);

// for (let i = 1; i < input.length; i++) {
//   const key = input[i];
//   let j = i - 1;
//   while (j >= 0 && input[j] < key) {
//     input[j + 1] = input[j];
//     j--;
//   }
//   input[j + 1] = key;
// }

// console.log(input.join(''));