function gcd(a, b) {
  while (b !== 0n) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

console.log(Number(lcm(A, B)));