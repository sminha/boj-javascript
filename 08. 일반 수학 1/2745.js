let [N, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ')

B = Number(B)

let decimal = 0, exponent = 0

for (let i = N.length - 1; i >= 0; i--) {
  let value = N[i].charCodeAt()

  if (value >= 65) value = value - 55
  else value = value - 48
  
  decimal += value * Math.pow(B, exponent++)
}

console.log(decimal)