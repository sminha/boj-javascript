let [N, K] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number)

let cnt = 0, output = 0

for (let i = 1; i <= N; i++) {
  if (N % i === 0) cnt++
  if (cnt === K) {
    output = i
    break
  }
}

console.log(output)