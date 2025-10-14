let input = require('fs').readFileSync('/dev/stdin').toString().split(' ')

const a = Number(input[0])
const b = Number(input[1])
const c = Number(input[2])

let reward

if (a === b && b === c) reward = 10000 + a * 1000
else if (a === b || b === c) reward = 1000 + b * 100
else reward = Math.max(...input) * 100

console.log(reward)