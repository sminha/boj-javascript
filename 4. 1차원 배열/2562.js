let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

input = input.map(Number)

let max = 1, index

// for (let i = 0; i < 9; i ++) {
//   if (max < input[i]) {
//     max = input[i]
//     index = i
//   }
// }

// console.log(max)
// console.log(index+1)

max = Math.max(...input)
console.log(max)
console.log(input.indexOf(max)+1)