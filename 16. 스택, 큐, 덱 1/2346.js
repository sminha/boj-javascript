// Node.js 풀이 - 메모리 초과 (조건 자체가 Node.js는 메모리 초과 불가피)
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const papers = input[1].split(' ').map(Number);

const balloons = papers.map((val, idx) => [idx + 1, val])

const result = [];

let idx = 0;

while (balloons.length > 0) {
  const [id, move] = balloons.splice(idx, 1)[0];
  result.push(id);

  if (balloons.length === 0) break;;

  if (move > 0) {
    idx = (idx + move - 1) % balloons.length;
  } else {
    idx = (idx + move) % balloons.length;
  }
  idx = (idx + balloons.length) % balloons.length;
}

console.log(result.join(' '));