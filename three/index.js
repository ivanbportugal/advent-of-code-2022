import { readFile } from './reader.js';

const data = await readFile();

const sacks = data.split('\n');

let totalScore = 0;

// let elfCount = 0;

for (const sack of sacks) {
  const one = sack.substring(0, sack.length / 2);
  const two = sack.substring(sack.length / 2);

  // const oneI = 0;
  let commonChar = undefined;
  for (const oneChar of [...one]) {
    
    for (const twoChar of [...two]) {
      if (oneChar === twoChar) {
        // found!
        commonChar = oneChar;
        break;
      }
    }
    if (commonChar) {
      break;
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