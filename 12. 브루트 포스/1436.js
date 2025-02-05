let N = Number(require('fs').readFileSync('/dev/stdin').toString())

let n = 0

for (let i = 666; ; i++) {
  if (i.toString().includes('666')) n++
  if (n === N) {
    console.log(i)
    break
  }
}