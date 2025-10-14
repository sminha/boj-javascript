let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let output = ''

// for (let i = 0; i < input.length; i++) {
//   const [a, b] = input[i].split(' ').map(Number)

//   if (a === 0 && b === 0) break

//   output += `${a+b}\n`
// }

// console.log(output.trim())

let i = 0

while (input[i] !== '0 0') {
  const [a, b] = input[i].split(' ').map(Number)

  output += `${a+b}\n`

  i += 1
}

console.log(output.trim())