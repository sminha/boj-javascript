let [[N, M], ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x => x.split(' ').map(Number))

let basket = []

for (let i = 0; i < N; i++) {
  basket.push(i+1)
}

for (const [i, j] of input) {
  const tmp = basket[i-1]
  basket[i-1] = basket[j-1]
  basket[j-1] = tmp
}

console.log(basket.join(' '))