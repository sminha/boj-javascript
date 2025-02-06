let N = Number(require('fs').readFileSync('/dev/stdin').toString())

let output = Infinity

for (let i = 0; ; i++) {
  let n = N, sum = 0
  n -= 5 * i
  if (n < 0) { break }
  else {
    if (n % 3 === 0) {
      sum += i + Math.floor(n/3)
      if (sum < output) { output = sum }
    }
  }
}

output === Infinity ? console.log(-1) : console.log(output)