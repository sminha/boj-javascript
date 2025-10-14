let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const X = Number(input[0])
const N = Number(input[1])

let total = 0

for (let i = 2; i < 2 + N; i++) {
  const [price, quantity] = input[i].split(' ').map(Number)
  total += price * quantity
}

total === X ? console.log('Yes') : console.log('No')