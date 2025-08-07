function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(val => val.trim());

input.shift();

const result = [];

for (let i of input) {
  const [A, B] = i.split(' ').map(Number);

  result.push(lcm(A, B));
}

console.log(result.join('\n'));