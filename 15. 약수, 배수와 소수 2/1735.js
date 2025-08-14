function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(val => val.trim());

const [numerator1, denominator1, numerator2, denominator2] = input.join(' ').split(' ').map(Number);

const denominator = denominator1 * denominator2;
const numerator = numerator1 * denominator2 + numerator2 * denominator1;
const g = gcd(numerator, denominator);

console.log(`${numerator / g} ${denominator / g}`);