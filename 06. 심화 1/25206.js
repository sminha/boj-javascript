let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((value) => value.trim())

let dict = {'A+': 4.5, 'A0': 4.0, 'B+': 3.5, 'B0': 3.0, 'C+': 2.5, 'C0': 2.0, 'D+': 1.5, 'D0': 1.0, 'F': 0.0}

let sumOfCredit = 0, sum = 0

for (let i = 0; i < 20; i++) {
  credit = Number(input[i].split(' ')[1])
  grade = input[i].split(' ')[2]

  if (grade === 'P') {
    continue
  }

  sumOfCredit += credit
  sum += credit * dict[grade]
}

console.log(sum/sumOfCredit)