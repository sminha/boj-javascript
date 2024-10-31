let [[N, M], ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((i) => i.split(' ').map(Number))

let basket = []

for (let i = 0; i < N; i++) {
  basket.push(i+1)
}

for (let i = 0; i < M; i++) {
  const start = Number(input[i][0])
  const end = Number(input[i][1])

  let arr = []

  for (let j = start - 1; j < end; j++) {
    arr.push(basket[j])
  }

  arr.reverse()

  basket.splice(start - 1, end - start + 1, ...arr)
}

console.log(basket.join(" "))