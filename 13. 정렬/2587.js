// 1. for문으로 평균 구하기
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let sum = 0

for (let i = 0; i < input.length; i++) {
  sum += input[i];
}

console.log(sum / 5);

console.log(input.sort((a, b) => a - b)[2]);

// 2. forEach 메소드로 평균 구하기
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

// let sum = 0

// input.forEach((num) => {sum += num;});

// console.log(sum / 5);

// console.log(input.sort((a, b) => a - b)[2]);

// 3. reduce 메소드로 평균 구하기
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

// console.log(input.reduce((acc, cur) => acc + cur, 0) / 5);

// console.log(input.sort((a, b) => a - b)[2]);