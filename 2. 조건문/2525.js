let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let A = Number(input[0].split(' ')[0])
let B = Number(input[0].split(' ')[1])
let C = Number(input[1])

let b = (B + C) % 60
let a = A + Math.floor((B + C) / 60)

if (a >= 24) a -= 24

console.log(a, b)