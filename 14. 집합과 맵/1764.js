let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(val => val.trim());

const N = Number(input.shift().split(' ')[0]);

const neverHeard = new Set(input.slice(0, N));
const neverSeen = new Set(input.slice(N));

const intersection = [...neverHeard].filter(name => neverSeen.has(name));

console.log(intersection.length);
console.log(intersection.sort().join('\n'));