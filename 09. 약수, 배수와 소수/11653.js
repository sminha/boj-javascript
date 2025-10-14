let N = Number(require('fs').readFileSync('/dev/stdin').toString())

if (N === 1) return

let output = ''

for (let i = 2; i * i <= N; i++) {
  while (N % i === 0) {
    output += `${i}\n`
    N /= i
  }
}

if (N > 1) {
  output += `${N}\n`
}

console.log(output.trim())