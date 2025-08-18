let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

input.pop();

const MAX = 246912;

const isPrime = Array(MAX + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i <= Math.sqrt(MAX); i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= MAX; j += i) {
      isPrime[j] = false;
    }
  }
}

const prefix = Array(MAX + 1).fill(0);
for (let i = 1; i <= MAX; i++) {
  prefix[i] = prefix[i - 1] + (isPrime[i] ? 1 : 0);
}

let result = [];
for (let i of input) {
  result.push(prefix[2 * i] - prefix[i]);
}
console.log(result.join('\n'));