let input = require('fs').readFileSync('/dev/stdin').toString()

const year = Number(input)

const output =  year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 1 : 0

console.log(output)