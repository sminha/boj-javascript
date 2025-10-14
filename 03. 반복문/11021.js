let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n')

T = Number(T)

let output = ''

for (let i = 0; i < T; i++) {
  const [a, b] = input[i].split(' ').map(Number)
  i !== T-1 ? output += `Case #${i+1}: ${a+b}\n` : output += `Case #${i+1}: ${a+b}`
}

console.log(output)