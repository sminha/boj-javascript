let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((value) => value.trim())

N = Number(N)

input = input.map((value) => value.split(' ').map(Number))

let board = new Array(100).fill(null).map(() => new Array(100).fill(0));

for (let i = 0; i < N; i++) {
  for (let r = input[i][1]; r < input[i][1] + 10; r++) {
    for (let c = input[i][0]; c < input[i][0] + 10; c++) {
      board[r][c] = 1
    }
  }
}

let area = 0

board.forEach((r) => {
  r.forEach((c) => {
    area += c
  })
})

console.log(area)