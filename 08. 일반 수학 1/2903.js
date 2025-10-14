let N = require('fs').readFileSync('/dev/stdin').toString()

N = Number(N)

let dot = 2

for (let i = 0; i < N; i++) {
  dot += dot - 1
}

console.log(dot ** 2)