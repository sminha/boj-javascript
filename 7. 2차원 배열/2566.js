let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((value) => value.trim().split(' ').map(Number))

let max = -1, row = 0, column = 0

for (let r = 0; r < 9; r++) {
  for (let c = 0; c < 9; c++) {
    if (max < input[r][c]) {
      max = input[r][c]
      row = r + 1
      column = c + 1
    }
  }
}

console.log(max)
console.log(row, column)