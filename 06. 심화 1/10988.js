let input = require('fs').readFileSync('/dev/stdin').toString().trim()

input === input.split('').reverse().join('') ? console.log(1) : console.log(0)