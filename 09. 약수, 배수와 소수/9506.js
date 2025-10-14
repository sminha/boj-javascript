let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number)

let output = ''

for (const n of input) {
  if (n === -1) break

  let sum = 0, divisors = []

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      divisors.push(i)
      sum += i
    }
  }

  if (sum === n) {
    output = '= '
    for (let i = 0 ; i < divisors.length; i++) {
      i === divisors.length - 1 ? output += `${divisors[i]}` : output += `${divisors[i]} + `
    }
  } else {
    output = 'is NOT perfect.'
  }

  console.log(`${n}`, output)
}