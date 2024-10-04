let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const T = Number(input[0])

for (let i = 1; i <= T; i++) {
  const numbers = input[i].split(' ').map(Number)
  console.log(numbers[0]+numbers[1])
}