// 1. shift() 풀이
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
let numbers = input[1].split(' ').map(Number);

const stack = [];

for (let i = 1; i <= N; i++) {
  if (stack[stack.length - 1] === i) { stack.pop(); continue;}

  while (numbers.length !== 0) {
    const n = numbers.shift();
    stack.push(n);
    if (n === i) break;
  }

  if (stack.pop() === i) continue;
  else { console.log('Sad'); return; }
}

console.log('Nice');

// 2. head 풀이
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// const N = Number(input[0]);
// let numbers = input[1].split(' ').map(Number);

// let head = 0;
// const stack = [];
// let need = 1;

// while (head < N) {
//   if (numbers[head] === need) {
//     head++;
//     need++;
//   } else if (stack.length > 0 && stack[stack.length - 1] === need) {
//     stack.pop();
//     need++;
//   } else {
//     stack.push(numbers[head++]);
//   }
// }

// while (stack.length > 0 && stack[stack.length - 1] === need) {
//   stack.pop();
//   need++;
// }

// console.log(need === N + 1 ? 'Nice' : 'Sad');