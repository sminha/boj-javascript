class Queue {
  constructor() { this.data = []; this.head = 0;}

  push(x) { this.data.push(x); }
  pop() { return !this.empty() ? this.data[this.head++] : -1; }
  size() { return this.data.length - this.head; }
  empty() { return this.data.length === this.head; }
  front() { return !this.empty() ? this.data[this.head] : -1; }
  back() { return !this.empty() ? this.data[this.data.length - 1] : -1; }
}

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(val => val.trim());

input.shift();

const queue = new Queue();

const result = [];

for (const i of input) {
  switch (i.split(' ')[0]) {
    case 'push':
      queue.push(i.split(' ')[1]);
      break;
    case 'pop':
      result.push(queue.pop());
      break;
    case 'size':
      result.push(queue.size());
      break;
    case 'empty':
      result.push(Number(queue.empty()));
      break;
    case 'front':
      result.push(queue.front());
      break;
    case 'back':
      result.push(queue.back());
      break;
  }
}

console.log(result.join('\n'));