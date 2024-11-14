let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number)

const set = [1, 1, 2, 2, 2, 8]

let output = ''

for (let i = 0; i < 6; i++) {
  output += `${set[i] - input[i]} `
}

console.log(output)