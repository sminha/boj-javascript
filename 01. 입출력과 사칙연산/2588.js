let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

console.log(Number(input[0])*Number(input[1][2]))
console.log(Number(input[0])*Number(input[1][1]))
console.log(Number(input[0])*Number(input[1][0]))
console.log(Number(input[0])*Number(input[1]))