let input = require('fs').readFileSync(0, "utf-8").toString().split('\n')

const [x, y] = input.map(Number)

let output

if (x > 0) {
  output = y > 0 ? '1' : '4'
} else {
  output = y > 0 ? '2' : '3'
}

console.log(output)