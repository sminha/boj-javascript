let [N, scores] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((i) => i.split(' ').map(Number))

const max = Math.max(...scores)

scores = scores.map((score) => score / max * 100)

let sum = 0

scores.forEach((score) => sum += score)

console.log(sum / N)