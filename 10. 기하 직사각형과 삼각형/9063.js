let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((value) => value.trim()).map((value) => value.split(' '))

let X = [], Y = []

for (const i of input) {
  X.push(Number(i[0]))
  Y.push(Number(i[1]))
}

let output = (Math.max(...X)-Math.min(...X)) * (Math.max(...Y)-Math.min(...Y))

console.log(output)