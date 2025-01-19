let [A, B, C] = require('fs').readFileSync('example.txt').toString().split('\n').map(Number)

if (A + B + C !== 180) {
  console.log('Error')
} else {
  if (A !== B && B !== C && A !== C) { console.log('Scalene') }
  else if (A === B && B === C) { console.log('Equilateral') }
  else { console.log('Isosceles') }
}