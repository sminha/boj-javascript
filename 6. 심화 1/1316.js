let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((value) => value.trim())

input = input.map((value) => value.split(''))

let output = 0

for (let i = 0; i < T; i++) {
  let isGroup = true

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === input[i][j+1]) {
      input[i].splice(j+1, 1)
      j--
    }
  }

  for (let j = input[i].length - 1; j >= 0; j--) {
    if (input[i].indexOf(input[i][j]) !== j) {
      isGroup = false
      break
    }
  }

  if (isGroup === true) {
    output += 1
  }
}

console.log(output)