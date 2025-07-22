let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((val) => val.trim());

input.shift();

console.log(input.map((val) => val.split(' ').map(Number)).sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
}).map((val) => val.join(' ')).join('\n'));