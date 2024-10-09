let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let output = ''

for (let i = 0; i < input.length - 1; i++) {
  const [a, b] = input[i].split(' ').map(Number)
  output += `${a+b}\n`
}

console.log(output.trim())