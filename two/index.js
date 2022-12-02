import { readFile } from './reader.js';

const data = await readFile();

console.log(data);

// const data = '';

// const items = data.split('\n\n');

// let grandTotal = 0;
// let allTotals = [];

// for (const item of items) {
//   const cals = item.split('\n');
//   let total = 0;
//   for (const cal of cals) {
//     total += +cal;
//   }
//   if (grandTotal < total) {
//     grandTotal = total
//   }
//   allTotals.push(total);
// }

// const sorted = allTotals.sort((a, b) => b - a)
// const top3 = allTotals[0] + allTotals[1] + allTotals[2]

// console.log(top3);