let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((val) => val.trim());

input.shift();

console.log(input.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]).join('\n'));