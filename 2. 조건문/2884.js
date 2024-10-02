let input = require('fs').readFileSync('/dev/stdin').toString().split(' ')

let [H, M] = input.map(Number)

M = M - 45

if (M < 0) {
  M = M + 60
  H = H - 1
  if (H < 0) H = 23
}

console.log(H, M)