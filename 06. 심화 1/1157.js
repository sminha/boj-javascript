let words = require('fs').readFileSync('/dev/stdin').toString().trim().toUpperCase()

alphabet = {}

for (const word of words) {
  alphabet[`${word}`] ? alphabet[`${word}`]++ : alphabet[`${word}`] = 1
}

const max_value = Math.max(...Object.values(alphabet))
const max_key = Object.keys(alphabet).filter((key) => alphabet[key] === max_value)

max_key.length > 1 ? console.log('?') : console.log(...max_key)