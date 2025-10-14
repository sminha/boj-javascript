let input = require('fs').readFileSync('/dev/stdin').toString().split(' ')

input = Number(input)

let sum = 0

for (let i = 1; i <= input; i++) {
  sum += i
}