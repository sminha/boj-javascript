let input = require('fs').readFileSync('/dev/stdin').toString()

input = Number(input)

let output = ''

for (let i = 1; i <= input; i++) {
  for (let j = 0; j < input - i; j++) {
    output += ' '
  }
  for (let k = 0; k < i; k++) {
    output += '*'
  }
  i !== input ? output += '\n' : output += ''
}

console.log(output)