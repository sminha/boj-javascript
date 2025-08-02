// 1. 대칭 차집합의 정의 그대로 구현
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(val => val.trim());

input.shift();

const A = new Set(input[0].split(' ').map(Number));
const B = new Set(input[1].split(' ').map(Number));

let result = 0

A.forEach(a => !B.has(a) && result++);
B.forEach(b => !A.has(b) && result++);

console.log(result);

// 2. 대칭 차집합의 원소 개수 공식 사용
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(val => val.trim());

// input.shift();

// const A = new Set(input[0].split(' ').map(Number));
// const B = new Set(input[1].split(' ').map(Number));
// const intersection = [...A].filter(num => B.has(num));

// console.log(A.size + B.size - 2 * intersection.length);