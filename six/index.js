import { readFile } from './reader.js';

const stream = await readFile();
const charArray = stream.split('');

const markers = [];

for (let i = 0; i < charArray.length - 14; i++) {

  const values = [];
  for (let j = 0; j < 14; j++) {
    values.push(charArray[i + j]);
  }
  
  if (values.length === new Set(values).size) {
    // unique
    console.log(`unique: ${i}: ${values}`)
    markers.push(i + 3);
  } else {
    // not unique
    console.log(`not unique: ${i}: ${values}`)
  }
}

console.log(markers);