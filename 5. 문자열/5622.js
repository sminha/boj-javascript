let words = require('fs').readFileSync('/dev/stdin').toString()

let time = 0

for (const word of words) {
  switch(word) {
    case 'A': case 'B': case 'C':
      time += 3
      break
    case 'D': case 'E': case 'F':
      time += 4
      break
    case 'G': case 'H': case 'I':
      time += 5
      break
    case 'J': case 'K': case 'L':
      time += 6
      break
    case 'M': case 'N': case 'O':
      time += 7
      break
    case 'P': case 'Q': case 'R': case 'S':
      time += 8
      break
    case 'T': case 'U': case 'V':
      time += 9
      break  
    case 'W': case 'X': case 'Y': case 'Z':
      time += 10
      break      
  }
}

console.log(time)