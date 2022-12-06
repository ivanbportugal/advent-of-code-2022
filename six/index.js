import { readFile } from './reader.js';

const data = await readFile();
const elves = data.split('\n');

console.log(fatStacks);