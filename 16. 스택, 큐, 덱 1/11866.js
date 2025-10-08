// 1. 인덱스 직접 계산 풀이
let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const circle = Array.from({ length: N }, (_, i) => i + 1);

let i = K - 1;

const result = [];

while (circle.length > 0) {
  if (circle.length === 1) { result.push(circle[0]); break; }

  result.push(circle.splice(i, 1)[0]);
  i = (i + K - 1) % circle.length;
}

console.log('<' + result.join(', ') + '>');

// 2. Queue 풀이
// let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

// const queue = Array.from({ length: N }, (_, i) => i + 1);

// const result = [];

// while (queue.length > 0) {
//   for (let i = 0; i < K - 1; i++) {
//     queue.push(queue.shift());
//   }
//   result.push(queue.shift());
// }

// console.log('<' + result.join(', ') + '>');