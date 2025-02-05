let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((value) => value.trim())

let [N, M] = NM.split(' ').map(Number)

const chessBoard = [
  [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
  ],
  [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
  ]
]

let output = Infinity, output1, output2

for (let r = 0; r <= N - 8; r++) {
  for (let c = 0; c <= M - 8; c++) {
    output1 = 0, output2 = 0

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (chessBoard[0][i][j] !== input[r+i][c+j]) output1++
        if (chessBoard[1][i][j] !== input[r+i][c+j]) output2++
      }
    }

    if (output > Math.min(output1, output2)) output = Math.min(output1, output2)
  }
}

console.log(output)