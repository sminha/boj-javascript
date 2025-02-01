let N = Number(require('fs').readFileSync('/dev/stdin').toString())

for (let i = 1; i <= N; i++) {
  let sum = i

  for (let j = 0; j < i.toString().length; j++) {
    sum += Number(i.toString()[j])
  }

  if (N === sum) {
    console.log(i)
    return
  }
}

console.log(0)