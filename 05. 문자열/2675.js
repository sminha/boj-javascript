let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((value) => value.trim())

input = input.map((value) => value.split(" "))

let output = ''

for (let i = 0; i < T; i++) {
  const [R, S] = input[i]

  for (let j = 0; j < S.length; j++) {
    for (let k = 0; k < R; k++) {
      output += S[j]
    }
  }

  i != T - 1 ? output += '\n' : output += ''
}

console.log(output)