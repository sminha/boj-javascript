let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((value) => value.trim())

let output = ''

for (let c = 0; c < 15; c++) {
  for(let r = 0; r < 5; r++) {
    if (input[r].length <= c) continue
    else output += input[r][c]
  }
}

console.log(output)