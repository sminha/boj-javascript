let S = require('fs').readFileSync('/dev/stdin').toString()

let output = ''

for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
  output += `${S.indexOf(String.fromCharCode(i))} `
}

console.log(output)