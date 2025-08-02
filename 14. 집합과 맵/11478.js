let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let substring = new Set();

for (let i = 1; i <= input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    j + i <= input.length && substring.add(input.slice(j, j + i));
  }
}

console.log(substring.size);