let input = require('fs').readFileSync('/dev/stdin').toString().trim()

console.log(input !== "" ? input.split(' ').length : 0)