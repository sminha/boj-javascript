// 1. stack 학습 겸 작성한 풀이
// class Stack {
//   constructor() { this.data = []; }

//   push(x) { this.data.push(x); }
//   pop() { return this.data.length ? this.data.pop() : -1; }
//   top() { return this.data.length ? this.data[this.data.length - 1] : -1; }
//   size() { return this.data.length; }
//   empty() { return this.data.length ? 0 : 1; }
// }

// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

// input.shift();

// const stack = new Stack();

// input.forEach(i => i ? stack.push(i) : stack.pop())

// console.log(stack.data.reduce((acc, cur) => acc += cur, 0));

// 2. 문제 풀이에 필요한 부분만 작성한 풀이
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

input.shift();

const stack = [];

input.forEach(i => i ? stack.push(i) : stack.pop());

console.log(stack.reduce((acc, cur) => acc + cur, 0));