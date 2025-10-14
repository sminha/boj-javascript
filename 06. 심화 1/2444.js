let N = Number(require('fs').readFileSync('/dev/stdin').toString())

let output = ''

for (let i = 0; i < N; i++) {
  for (let j = N - 1; j > i; j--) {
    output += ' '
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    output += '*'
  }
  output += '\n'
}

for (let i = 0; i < N - 1; i++) {
  for (let j = 0; j <= i; j++) {
    output += ' '
  }
  for (let k = 0; k < 2 * (N - (i + 2)) + 1; k++) {
    output += '*'
  }
  i !== N - 2 ? output += '\n' : output += ''
}

console.log(output)