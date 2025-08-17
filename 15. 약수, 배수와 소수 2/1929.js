// 1. 에라토스테네스의 체 풀이
function eratosthenes(M, N) {
  const isPrime = Array(N + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const result = [];
  for (let i = M; i <= N; i++) {
    if (isPrime[i]) result.push(i);
  }

  return result;
}

let [M, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log(eratosthenes(M, N).join('\n'));

// 2. 3부터 √N까지 나눠보는 풀이
// function isPrime(n) {
//   if (n < 2) return false;
//   if (n === 2) return true;
//   if (n % 2 === 0) return false;

//   const limit = Math.sqrt(n);
//   for (let i = 3; i <= limit; i += 2) {
//     if (n % i === 0) return false;
//   }

//   return true;
// }

// let [M, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

// const result = [];

// for (let i = M; i <= N; i++) {
//   if (isPrime(i)) result.push(i);
// }

// console.log(result.join('\n'));