let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const k = input[0].trim().split(' ').map(Number)[1];
const scores = input[1].split(' ').map(Number);

console.log(scores.sort((a, b) => b - a)[k - 1]);