function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

input.shift();

let gap = [];

for (let i = 0; i < input.length - 1; i++) {
  gap.push(input[i + 1] - input[i]);
}

let g = gap.reduce((acc, cur) => gcd(acc, cur));

console.log(gap.reduce((acc, cur) => acc += cur / g - 1, 0));