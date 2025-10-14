let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let [N, M] = NM.split(' ').map(Number)

input = input.map((value) => value.trim().split(' ').map(Number))

let output = ''

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    output += input[i][j] + input[i+N][j] + ' '
  }
  output += '\n'
}

console.log(output.trim())