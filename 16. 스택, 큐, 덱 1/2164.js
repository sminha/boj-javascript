let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

if (input === 1) { console.log(1); return; }

const queue = Array.from({ length: input }, (_, i) => i + 1);

let head = 0;

// while (true) {
//   const first = queue[head++];
//   const second = queue[head++];
//   if (head === queue.length) { console.log(second); break; }
//   queue.push(second);
// }
while (queue.length - head > 1) {
  head++;
  queue.push(queue[head++]);
}
console.log(queue[head]);