let input = require('fs').readFileSync('/dev/stdin').toString()

const N = Number(input[0])

for (let i = 1; i < 10; i++) {
  console.log(`${N} * ${i} = ${N*i}`)
}