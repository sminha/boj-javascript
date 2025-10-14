let input = require('fs').readFileSync('/dev/stdin').toString()

const N = Number(input)

console.log(`${'long '.repeat(N/4)}int`)