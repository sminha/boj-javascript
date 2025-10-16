function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) { result *= i; }

  return result;
}

let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

result = factorial(N) / (factorial(K) * factorial(N - K));

console.log(result);