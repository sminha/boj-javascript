let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((i) => Number(i))

input = input.map((value) => value % 42)


let output = []

for (let i = 0; i < 10; i++) {
  if (!output.includes(input[i])) output.push(input[i])
}

console.log(output.length)

// https://www.acmicpc.net/board/view/66532