import { readFile } from './reader.js';

const data = await readFile();

const rounds = data.split('\n');

// Part 2 (forced outcomes)
const points = {
  "A X": 0 + 3,
  "A Y": 3 + 1,
  "A Z": 6 + 2,
  "B X": 0 + 1,
  "B Y": 3 + 2,
  "B Z": 6 + 3,
  "C X": 0 + 2,
  "C Y": 3 + 3,
  "C Z": 6 + 1,
}

let total = 0;
for (const round of rounds) {
  const point = points[round];
  total += point;
  // Ug this didn't work for some reason... needed to hard code above instead
  // const players = round.split(' ');
  // const me = players[0];
  // let elf = players[1];

  // if (elf === 'X') {
  //   elf = 'A';
  // } else if (elf === 'Y') {
  //   elf = 'B';
  // } else if (elf === 'Z') {
  //   elf = 'C';
  // } else {
  //   throw Error('unknown');
  // }

  // let roundTotal = 0;

  
  // // shape
  // if (me === 'A') {
  //   roundTotal += 1;
  // } else if (me === 'B') {
  //   roundTotal += 2;
  // } else if (me === 'C') {
  //   roundTotal += 3;
  // }

  // // outcome
  // if (me === elf) {
  //   roundTotal += 3;
  // } else {

  //   if (me === 'A') {
  //     // roundTotal += 1;
  //     if (elf === 'A') {
  //       // roundTotal += 3;
  //     } else if (elf === 'B') {
  //       // roundTotal += 3;
  //     } else if (elf === 'C') {
  //       roundTotal += 6;
  //     } else {
  //       throw Error('unknown');
  //     }
  //   }

  //   if (me === 'B') {
  //     // roundTotal += 2;
  //     if (elf === 'A') {
  //       roundTotal += 6;
  //     } else if (elf === 'B') {
  //       // roundTotal += 3;
  //     } else if (elf === 'C') {
  //       // roundTotal += 6;
  //     } else {
  //       throw Error('unknown');
  //     }
  //   }

  //   if (me === 'C') {
  //     // roundTotal += 3;
  //     if (elf === 'A') {
  //       // roundTotal += 3;
  //     } else if (elf === 'B') {
  //       roundTotal += 6;
  //     } else if (elf === 'C') {
  //       // roundTotal += 3;
  //     } else {
  //       throw Error('unknown');
  //     }
  //   }
  // }

  // total += roundTotal
}

console.log(total);

// Notes
// const win = 6;
// const tie = 3;
// const loss = 0;

// const rock = 1;
// const paper = 2;
// const sciz = 3;

// A B C
// X Y Z

// A > C
// B > A
// C > B

// Convert 
