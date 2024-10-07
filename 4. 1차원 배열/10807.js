let [N, input, v] = require('fs').readFileSync('/dev/stdin').toString().split('\n')

N = Number(N)
v = Number(v)

input = input.split(' ').map(Number)

let output = 0

// for (let i = 0; i < N; i++) {
//   if (input[i] !== v) continue
//   else output += 1
// }

output = input.filter((value) => value === v).length

console.log(output)