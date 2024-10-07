let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const N = Number(input[0].split(' ')[0])
const X = Number(input[0].split(' ')[1])

let output = ''

// for (let i = 0; i < N; i++) {
//   let number = input[1].split(' ')[i]
//   if (number < X) output += `${number} `
// }

// console.log(output.trim())

input[1].split(' ')
  .filter((value) => value < X)
  .forEach((value) => output += `${value} `)

console.log(output.trim())