// 1. enter, leave 조건 사용 X
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((val) => val.trim());

input.shift();

input = input.map((val) => val.split(' ')[0]);

let company = new Set();

input.map((i) => company.has(i) ? company.delete(i) : company.add(i));

console.log([...company].sort().reverse().join('\n'));

// 2. enter, leave 조건 사용 O
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((val) => val.trim());

// input.shift();

// let company = new Set();

// for (let i of input) {
//   const [name, state] = i.split(' ');
  
//   if (state === 'enter') {
//     company.add(name);
//   }
  
//   if (state === 'leave') {
//     company.delete(name);
//   }
// }

// console.log([...company].sort().reverse().join('\n'));