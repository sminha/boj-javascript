let X = require('fs').readFileSync('/dev/stdin').toString()

X = Number(X)

let cnt = 1, sum = 2

while (true) {
  if (cnt < X) {
    cnt += sum
    sum += 1
    
    continue
  }

  break
}

let denominator = 1, numerator = 1

if (sum % 2 !== 0) {
  denominator += cnt - X
  numerator = sum - denominator
} else {
  numerator += cnt - X
  denominator = sum - numerator
}

console.log(numerator + '/' + denominator)