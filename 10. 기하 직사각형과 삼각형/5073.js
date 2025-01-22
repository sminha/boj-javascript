let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((value) => value.trim())

for (const i of input) {
  if (i === '0 0 0') break

  let [a, b, c] = i.split(' ').map(Number)

  if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
    console.log('Invalid')
  } else {
    if (a !== b && b !== c && a !== c) { console.log('Scalene') }
    else if (a === b && b === c) { console.log('Equilateral') }
    else { console.log('Isosceles') }
  }
}