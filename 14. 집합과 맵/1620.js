// 1. 맵 + 맵 풀이
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((val) => val.trim());

let [N, M] = input[0].split(' ').map(Number);

let numberToName = new Map();
input.slice(1, N + 1).forEach((val, idx) => numberToName.set(idx + 1, val));
let nameToNumber = new Map();
input.slice(1, N + 1).forEach((val, idx) => nameToNumber.set(val, idx + 1));

let question = input.slice(N + 1);

let result = '';

for (let q of question) {
  if (!isNaN(Number(q))) {
    result += numberToName.get(Number(q));
  } else {
    result += nameToNumber.get(q);
  }
  result += '\n';
}

console.log(result.trim());

// 2. 배열 + 맵 풀이 (better)
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((val) => val.trim());

// let [N, M] = input[0].split(' ').map(Number);

// let nameToNumber = new Map();
// input.slice(1, N + 1).forEach((val, idx) => nameToNumber.set(val, idx + 1));

// let question = input.slice(N + 1);

// let result = '';

// for (let q of question) {
//   if (!isNaN(Number(q))) {
//     result += input[q];
//   } else {
//     result += nameToNumber.get(q);
//   }
//   result += '\n';
// }

// console.log(result.trim());