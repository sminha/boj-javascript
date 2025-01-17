let [[xa, ya], [xb, yb], [xc, yc]] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((value) => value.split(' ').map(Number))

let output = ''

if (xc === xa) { output += `${xb}`}
else if (xc === xb) { output += `${xa}`}
else { output += `${xc}` }

if (yc === ya) { output += ` ${yb}`}
else if (yc === yb) { output += ` ${ya}`}
else { output += ` ${yc}` }

console.log(output)