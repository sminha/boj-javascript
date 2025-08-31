class Stack {
  constructor() { this.data = []; }

  push(x) { this.data.push(x); }
  pop() { return this.data.length ? this.data.pop() : -1; }
  top() { return this.data.length ? this.data[this.data.length - 1] : -1; }
  size() { return this.data.length; }
  empty() { return this.data.length ? 0 : 1; }
}

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(val => val.trim().split(' ').map(Number));

input.shift();

const stack = new Stack();

const result = [];

for (const i of input) {
  switch (i[0]) {
    case 1:
      stack.push(i[1]);
      break;
    case 2:
      result.push(stack.pop());
      break;
    case 3:
      result.push(stack.size());
      break;
    case 4:
      result.push(stack.empty());
      break;
    case 5:
      result.push(stack.top());
      break;
  }
}

console.log(result.join('\n'));