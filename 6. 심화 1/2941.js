let word = require('fs').readFileSync('/dev/stdin').toString().trim()

console.log(word)

const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

for (const c of croatia) {
  while (word.includes(c)) {
    word = word.replace(c, '*')
  }
}

console.log(word.length)