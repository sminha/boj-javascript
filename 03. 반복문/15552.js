let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const T = Number(input[0])

let output = ''

for (let i = 1; i <= T; i++) {
  const [a, b] = input[i].split(' ').map(Number)
  // i !== T ? output += `${a+b}\n` : output +=`${a+b}`
  output += `${a+b}\n`
}

console.log(output.trim())