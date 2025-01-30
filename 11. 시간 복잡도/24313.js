let [[a1, a0], [c], [n0]] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((value) => value.split(' ').map(Number))

if (a1 > c) {
  console.log(0)
} else {
  if (a1 * n0 + a0 <= c * n0) console.log(1)
  else console.log(0)
}