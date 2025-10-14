let input = require('fs').readFileSync('/dev/stdin').toString()

input = Number(input)

let count = 1, rooms = 1

while (true) {
  if (input > rooms) {
    rooms += 6 * count++
  } else {
    break
  }
}

console.log(count)