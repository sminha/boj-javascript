let [A, B, V] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number)

let day = 1

day = Math.ceil((V-A)/(A-B)) + 1

console.log(day)