let N = Number(require('fs').readFileSync('/dev/stdin').toString());

if (N === 0) { console.log(1); return; }

let factorial = 1;

for (i = 1; i <= N; i++) {
  factorial *= i;
}

console.log(factorial);