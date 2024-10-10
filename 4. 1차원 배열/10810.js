let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const N = NM.split(' ').map(Number)[0]
const M = NM.split(' ').map(Number)[1]

let basket = new Array(N).fill(0)

for (let i = 0; i < M; i++) {
  const [start, end, n] = input[i].split(' ').map(Number)

  for (let j = start - 1; j < end; j++) {
    basket[j] = n
  }
}

console.log(basket.join(' '))

// let [[N, M], ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x => x.split(' ').map(Number))

// let basket = new Array(N).fill(0)

// for (let [i, j, k] of input) {
//   for (let index = i - 1; index < j; index++) {
//     basket[index] = k
//   }
// }

// console.log(basket.join(' '))