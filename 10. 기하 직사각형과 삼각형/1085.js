let [x, y, w, h] = require('fs').readFileSync('example.txt').toString().split(' ').map(Number)

console.log(Math.min(x, y, w-x, h-y))