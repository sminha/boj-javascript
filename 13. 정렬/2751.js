// 1. sort 풀이
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(input.slice(1).sort((a, b) => a - b).join('\n'));

// 2. 병합정렬 풀이
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

// input.shift();

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;

//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }

// function merge(left, right) {
//   const result = [];
//   let i = 0, j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i++]);
//     } else {
//       result.push(right[j++]);
//     }
//   }

//   return result.concat(left.slice(i)).concat(right.slice(j));
// }

// console.log(mergeSort(input).join('\n'));

// 3. 힙정렬 풀이
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

// input.shift();

// function heapSort(arr) {
//   const n = arr.length;

//   for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//     heapify(arr, n, i);
//   }

//   for (let i = n - 1; i > 0; i--) {
//     [arr[0], arr[i]] = [arr[i], arr[0]];
//     heapify(arr, i, 0);
//   }

//   return arr;
// }

// function heapify(arr, n, i) {
//   let largest = i;
//   let left = 2 * i + 1;
//   let right = 2 * i + 2;

//   if (left < n && arr[largest] < arr[left]) {
//     largest = left;
//   }

//   if (right < n && arr[largest] < arr[right]) {
//     largest = right;
//   }

//   if (largest !== i) {
//     [arr[i], arr[largest]] = [arr[largest], arr[i]];
//     heapify(arr, n, largest);
//   }
// }

// console.log(heapSort(input).join('\n'));