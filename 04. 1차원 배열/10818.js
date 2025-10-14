let [N, numbers] = require('fs').readFileSync('/dev/stdin').toString().split('\n')

numbers = numbers.split(' ').map(Number)

// let max = -1000000
// let min = 1000000

// for (const number of numbers) {
//   if (max < number) max = number
//   if (number < min) min = number
// }

numbers.sort((a, b) => a - b)

console.log(`${numbers[0]} ${numbers[N-1]}`)