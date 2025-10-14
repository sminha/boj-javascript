let [N, input] = require('fs').readFileSync('/dev/stdin').toString().split('\n')

N = Number(N)

let sum = 0

for (let i = 0; i < N; i++) {
  sum += Number(input[i])
}

console.log(sum)