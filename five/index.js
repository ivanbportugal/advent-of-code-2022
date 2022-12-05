import { readFile } from './reader.js';

const data = await readFile();
const elves = data.split('\n');

// let total = 0;

// let i = 0;
// for (const pair of elves) {
//   const thePairs = pair.split(',');
//   const one = thePairs[0];
//   const two = thePairs[1];

//   const oneEnds = one.split('-');
//   const twoEnds = two.split('-');

//   const oneStart = +oneEnds[0];
//   const oneEnd = +oneEnds[1];

//   const twoStart = +twoEnds[0];
//   const twoEnd = +twoEnds[1];

//   if (oneStart >= twoStart && oneEnd <= twoEnd
//     || oneStart <= twoStart && oneEnd >= twoEnd) {
//     total++;
//     continue;
//     // console.log(`${i} - ${pair}. Total: ${total} `);
//   }

//   if (oneStart >= twoStart && oneStart <= twoEnd
//     || twoStart >= oneStart && twoStart <= oneEnd
//     || oneEnd <= twoEnd && oneEnd >= twoStart
//     || twoEnd <= oneEnd && twoEnd >= oneStart) {
//     total++;
//   }
//   i++;
// }

// const sacks = data.split('\n');

console.log(total);