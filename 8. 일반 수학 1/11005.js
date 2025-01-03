let [N, B] = require('fs').readFileSync('example.txt').toString().split(' ').map(Number)

let exponent = 0

while (N >= B ** exponent) {
  exponent++
}

let number = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let output = ''

for (let i = exponent - 1; i >= 0; i--) {
  output += number[Math.floor(N/(B**i))]
  N -= (B ** i) * Math.floor(N/(B**i))
}

console.log(output)