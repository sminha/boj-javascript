let [[N, M], input] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((value) => value.split(' ').map(Number))

let max = 0

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = input[i] + input[j] + input[k]
      if (max < sum && sum <= M) { max = sum }
      else { continue }
    }
  }
}

console.log(max)