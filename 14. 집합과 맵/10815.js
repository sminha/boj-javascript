let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((val) => val.trim());

const first = new Set(input[1].split(' ').map(Number));
const second = input[3].split(' ').map(Number);

console.log(second.map((num) => first.has(num) ? 1 : 0).join(' '));