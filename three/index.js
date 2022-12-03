import { readFile } from './reader.js';

const data = await readFile();

const sacks = data.split('\n');

let totalScore = 0;

let lineCount = 0;
const groups = [];
let group = '';
for (const sack of sacks) {
  group = group.concat(`\n${sack}`);
  lineCount++;
  if (lineCount > 2) {
    lineCount = 0;
    groups.push(group);
    group = '';
  }
}


for (const group of groups) {
  let commonChar = undefined;

  const elves = group.split('\n').splice(1);
  const elf1 = elves[0];
  const elf2 = elves[1];
  const elf3 = elves[2];

  for (const char1 of [...elf1]) {
    for (const char2 of [...elf2]) {
      if (char1 === char2) {
        for (const char3 of [...elf3]) {
          if (char1 === char3) {
            commonChar = char1;
            break;
          }
        }
      }
    }
  }

  if (!commonChar) {
    throw new Error('not found!')
  }

  const subtractor = (commonChar === commonChar.toUpperCase()) ? (65 - 27) : 96;
  let score = commonChar.charCodeAt(0) - subtractor;
  totalScore += score;
  console.log(`${commonChar}: ${score}. ${totalScore}`)
}

// a - z = 1 - 26
// A - Z = 27 - 52
// 65 for upper. 97 for lower.
console.log(totalScore)