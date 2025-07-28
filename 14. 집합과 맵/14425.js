let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((val) => val.trim());

const N = Number(input[0].split(' ')[0]) + 1

const first = new Set(input.slice(1, N));
const second = input.slice(N);

let result = 0;

for (let i of second) {
  if (first.has(i)) result++;
}

console.log(result);