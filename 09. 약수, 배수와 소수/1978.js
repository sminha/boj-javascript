let [N, input] = require('fs').readFileSync('/dev/stdin').toString().split('\n')

N = Number(N)
input = input.split(' ').map(Number)

let output = 0

for (let i = 0; i < N; i++) {
  let isPrimeNumber = true

  if (input[i] === 1) {
    isPrimeNumber = false
  } else {
    for (let j = 2; j < input[i]; j++) {
      if (input[i] % j === 0) isPrimeNumber = false
    }
  }
  
  if (isPrimeNumber === true) output += 1
}

console.log(output)