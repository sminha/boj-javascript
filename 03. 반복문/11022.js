let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n')

T = Number(T)

let output = ''

for (let i = 0; i < T; i++) {
  const [a, b] = input[i].split(' ').map(Number)
  output += `Case #${i+1}: ${a} + ${b} = ${a+b}`
  i !== T-1 ? output += '\n' : output += ''
}

console.log(output)