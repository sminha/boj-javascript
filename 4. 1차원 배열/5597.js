let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((i) => Number(i))

let student = []

for (let i = 1; i <= 30; i++) {
  student.push(i)
}

for (const i of input) {
  for (const s of student) {
    if (i === s) {
      const index = student.indexOf(s)
      student.splice(index, 1)
    }
  }
}

student.sort((a, b) => a - b)

student.forEach((value) => console.log(value))