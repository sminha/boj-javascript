let [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ')

let A_reversed = 0, B_reversed = 0

for (let i = 2; i >= 0; i--) {
  A_reversed += A[i] * (10 ** i)
  B_reversed += B[i] * (10 ** i)
}

console.log(A_reversed > B_reversed ? A_reversed : B_reversed)