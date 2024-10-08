let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const N = Number(input[0].split(' ')[0])
const X = Number(input[0].split(' ')[1])
// const numbers = input[1].split(' ').map(Number)

// let output = ''

// for (let i = 0; i < N; i++) {
//   if (numbers[i] < X) output += `${numbers[i]} `
// }

// console.log(output.trim())

input[1].split(' ')
  .filter((value) => value < X)
  .forEach((value) => output += `${value} `)

console.log(output.trim())