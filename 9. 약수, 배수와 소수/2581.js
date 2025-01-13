let [M, N] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number)

primeNumbers = []

for (let i = M; i <= N; i++) {
  let isPrimeNumber = true

  if (i === 1) { continue }
  else {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrimeNumber = false
        break
      }
    }
  }

  if (isPrimeNumber === true) primeNumbers.push(i)
}

if (primeNumbers.length > 0) {
  console.log(primeNumbers.reduce((acc, cur) => acc += cur, 0))
  console.log(primeNumbers[0])
} else {
  console.log(-1)
}