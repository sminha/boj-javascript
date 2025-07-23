// 1. indexOf 풀이 (시간 초과)
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// input = input[1].split(' ').map(Number);

// const numbers = [...new Set([...input].sort((a, b) => a - b))];

// const result = input.map((num) => numbers.indexOf(num));

// console.log(result.join(' '));

// 2. map 풀이
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input = input[1].split(' ').map(Number);

const numbers = [...new Set([...input].sort((a, b) => a - b))];

const map = new Map();
numbers.forEach((num, idx) => map.set(num, idx));

const result = input.map((num) => map.get(num));

console.log(result.join(' '));