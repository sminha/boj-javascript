let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(val => val.trim());

const sanggeun = new Map();

for (let i of input[1].split(' ').map(Number)) {
  // const prev = sanggeun.get(i) ? sanggeun.get(i) : 0;
  const prev = sanggeun.get(i) ?? 0;
  sanggeun.set(i, prev + 1);
}

let result = '';

for (let i of input[3].split(' ').map(Number)) {
  // result += (sanggeun.get(i) ? `${sanggeun.get(i)} ` : '0 ');
  result += `${sanggeun.get(i) ?? 0} `;
}

console.log(result.trim());