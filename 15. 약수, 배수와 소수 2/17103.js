let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

input.shift();

const MAX = Math.max(...input);

const isPrime = Array(MAX + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i <= Math.sqrt(MAX); i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= MAX; j += i) isPrime[j] = false;
  }
}

let result = [];

for (const i of input) {
  let cnt = 0;
  if (i === 4) cnt++;
  for (let j = 3; j <= i / 2; j += 2) {
    if (isPrime[j] && isPrime[i - j]) {
      cnt++;
    }
  }
  result.push(cnt);
}

console.log(result.join('\n'));