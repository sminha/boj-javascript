let [a, b, c, d, e, f] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number)

for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      // 첨에 (a-d) * x + (b-e) * y === c - f 이거로 해서 틀림
      console.log(x, y)
      return
    }
  }
}