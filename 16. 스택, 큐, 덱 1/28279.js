class Deque {
  constructor() {
    this.data = [];
    this.frontIdx = 0;
    this.backIdx = 0;
  }

  push_back(x) { this.data[this.backIdx++] = x; }
  push_front(x) { this.data[--this.frontIdx] = x; }
  pop_back() { return !this.empty() ? this.data[--this.backIdx] : -1; }
  pop_front() { return !this.empty() ? this.data[this.frontIdx++] : -1; }
  front() { return !this.empty() ? this.data[this.frontIdx] : -1; }
  back() { return !this.empty() ? this.data[this.backIdx - 1] : -1; }
  empty() { return this.frontIdx === this.backIdx; }
  size() { return this.backIdx - this.frontIdx; }
}

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(val => val.trim());

input.shift();

const deque = new Deque();

const result = [];

input.forEach(i => {
  const [cmd, val] = i.split(' ').map(Number);
  switch(cmd) {
    case 1:
      deque.push_front(val);
      break;
    case 2:
      deque.push_back(val);
      break;
    case 3:
      result.push(deque.pop_front());
      break;
    case 4:
      result.push(deque.pop_back());
      break;
    case 5:
      result.push(deque.size());
      break;
    case 6:
      result.push(Number(deque.empty()));
      break;
    case 7:
      result.push(deque.front());
      break;
    case 8:
      result.push(deque.back());
      break;
  }
});

console.log(result.join('\n'));