let [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number)

if (a + b + c - Math.max(a, b, c) > Math.max(a, b, c)) {
  console.log(a + b + c)
} else {
  console.log(a + b + c - (Math.max(a, b, c) - (a + b + c - Math.max(a, b, c))) - 1) 
}