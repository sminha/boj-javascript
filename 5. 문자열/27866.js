let [S, i] = require('fs').readFileSync('example.txt').toString().split('\n')

i = Number(i)

console.log(S[i-1])