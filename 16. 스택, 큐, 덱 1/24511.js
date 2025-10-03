let [N, A, B, M, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(val =>  val.trim());

A = A.split(' ').map(Number);
B = B.split(' ').map((val) => [Number(val)]);
C = C.split(' ').map(Number)

if (!A.includes(0)) { console.log(C.join(' ')); return; }

// 1. for문 풀이
// const result = [];
// for (let i = 0; i < N; i++) {
//   if (A[i] === 0) {
//     result.push(B[i]);
//   }
// }
// 2. filter 풀이
const result = B.filter((_, idx) => A[idx] === 0);

result.reverse().push(...C);

console.log(result.slice(0, M).join(' '));