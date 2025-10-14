let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((value) => value.trim())

for(const i of input) {
  if (i === '0 0') break

  const [A, B] = i.split(' ')

  let output = ''

  if (B % A === 0) output = 'factor'
  else if (A % B === 0) output = 'multiple'
  else output = 'neither'

  console.log(output)
}