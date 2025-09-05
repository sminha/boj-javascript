let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const result = [];

for (const i of input) {
  const stack = [];
  let isValid = true;

  if (i === '.') break;

  for (const c of i) {
    if (c === '(' || c === '[') {
      stack.push(c);
    } else if (c === ')') {
      if (!(stack.pop() === '(')) { isValid = false; break; }
    } else if (c === ']') {
      if (!(stack.pop() === '[')) { isValid = false; break; }
    }
  }

  if (stack.length > 0) isValid = false;

  result.push(isValid ? 'yes' : 'no');
}

console.log(result.join('\n'));