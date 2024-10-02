let input = require('fs').readFileSync('/dev/stdin').toString()

const score = Number(input)

let output

if (90 <= score) {
  output = 'A'
} else if (80 <= score) {
  output = 'B'
} else if (70 <= score) {
  output = 'C'
} else if (60 <= score) {
  output = 'D'
} else {
  output = 'F'
}

console.log(output)