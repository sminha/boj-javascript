let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n')

input = input.map((value) => value.trim())

for (let i = 0; i < T; i++) {
  console.log(`${input[i][0]}${input[i][input[i].length-1]}`)
}