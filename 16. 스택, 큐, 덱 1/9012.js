let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(val => val.trim());

input.shift();

const result = [];

for (const i of input) {
  let isShortage = false, isRemaining = false;
  const stack = [];

  for (const p of i) {
    if (p === '(') { stack.push(p); }
    else if (!stack.pop()) { isShortage = true; break; }
  }

  isRemaining = stack.length;

  isShortage || isRemaining ? result.push('NO') : result.push('YES');
}

console.log(result.join('\n'));