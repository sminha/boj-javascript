let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number)

coin = [25, 10, 5, 1]

let output = ''

for (let i = 0; i < T; i++) {
  for (const c of coin) {
    output += Math.floor(input[i]/c) + ' '
    input[i] %= c
  }
  
  output = output.trim()
  output += '\n'
}

console.log(output.trim())