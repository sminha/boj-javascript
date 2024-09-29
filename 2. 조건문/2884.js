let input = require('fs').readFileSync('/dev/stdin').toString().split(' ')

let [H, M] = input.map(Number)

if (45 <= M) {
  M = M - 45
} else {
  M = M + 60 - 45
  H = H != 0 ? H - 1 : 23
}

console.log(H, M)