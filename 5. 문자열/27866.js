let [S, i] = require('fs').readFileSync('/dev/stdin').toString().split('\n')

i = Number(i)

console.log(S[i-1])