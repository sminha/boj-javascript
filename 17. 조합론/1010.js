// 1. BigInt 풀이
// function factorialBigInt(n) {
//   let result = 1n;

//   for (let i = 2n; i <= n; i++) {
//     result *= i;
//   }

//   return result;
// }

// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(val => val.trim());

// input.shift();

// const result = []

// for (const i of input) {
//   const [N, M] = i.split(' ').map(Number);
//   result.push(factorialBigInt(BigInt(M)) / (factorialBigInt(BigInt(N)) * factorialBigInt(BigInt((M - N)))));
// }

// console.log(result.join('\n'));

// 2. 누적곱 풀이 (메모리, 시간 절약)
function combination(n, r) {
  let result = 1;

  if (r > n - r) r = n - r;
  for (let i = 0; i < r; i++) {
    result *= (n - i);
    result /= (i + 1);
  }

  return Math.round(result);
}

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(val => val.trim());

input.shift();

const result = []

for (const i of input) {
  const [N, M] = i.split(' ').map(Number);
  result.push(combination(M, N));
}

console.log(result.join('\n'));