function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const limit = Math.sqrt(n);
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

input.shift();

let result = [];

for (const i of input) {
  let n = i;

  while (true) {
    if (isPrime(n)) { result.push(n); break; }
    else { n++; }
  }
}

console.log(result.join('\n'));