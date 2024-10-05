let input = require('fs').readFileSync('example.txt').toString()

input = Number(input)

let output = ''

for (let i = 1; i <= input; i++) {
  for (let j = 0; j < i; j++) {
    output += '*'
  }
  i !== input ? output += '\n' : output += ''
}

console.log(output)