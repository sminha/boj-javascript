// 1. sort 풀이
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(input.slice(1).map(Number).sort((a, b) => a - b).join('\n'));

// 2. 버블정렬 풀이
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

// input = input.slice(1);

// for (let i = 0; i < input.length - 1; i++) {
//   for (let j = 0; j < input.length - 1 - i; j++) {
//     if (input[j + 1] < input[j]) {
//       [input[j], input[j + 1]] = [input[j + 1], input[j]];
//     }
//   }
// }

// console.log(input.join('\n'));

// 3. 선택정렬 풀이
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

// input = input.slice(1);

// for (let i = 0; i < input.length; i++) {
//   let minIdx = i;
//   for (let j = i + 1; j < input.length; j++) {
//     if (input[j] < input[minIdx]) {
//       minIdx = j
//     }
//   }
//   [input[i], input[minIdx]] = [input[minIdx], input[i]];
// }

// console.log(input.join('\n'));

// 4. 삽입정렬 풀이
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

// input = input.slice(1);

// for (let i = 1; i < input.length; i++) {
//   let key = input[i];
//   let j = i - 1;
//   while (j >= 0 && key < input[j]) {
//     input[j + 1] = input[j];
//     j--;
//   }
//   input[j + 1] = key;
// }

// console.log(input.join('\n'));