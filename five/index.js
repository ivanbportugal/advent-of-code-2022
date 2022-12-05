import { readFile } from './reader.js';

// const data = await readFile();
const instructions = await readFile('./instructions.txt');
   
// This is lame-o...
const one = [];
one.push('Z');
one.push('T');
one.push('F');
one.push('R');
one.push('W');
one.push('J');
one.push('G');

const two = [];
two.push('G');
two.push('W');
two.push('M');

const three = [];
three.push('J');
three.push('N');
three.push('H');
three.push('G');

const four = [];
four.push('J');
four.push('R');
four.push('C');
four.push('N');
four.push('W');

const five = [];
five.push('W');
five.push('F');
five.push('S');
five.push('B');
five.push('G');
five.push('Q');
five.push('V');
five.push('M');

const six = [];
six.push('S');
six.push('R');
six.push('T');
six.push('D');
six.push('V');
six.push('W');
six.push('C');

const seven = [];
seven.push('H');
seven.push('B');
seven.push('N');
seven.push('C');
seven.push('D');
seven.push('Z');
seven.push('G');
seven.push('V');

const eight = [];
eight.push('S');
eight.push('J');
eight.push('N');
eight.push('M');
eight.push('G');
eight.push('C');

const nine = [];
nine.push('G');
nine.push('P');
nine.push('N');
nine.push('W');
nine.push('C');
nine.push('J');
nine.push('D');
nine.push('L');

const fatStacks = [];
fatStacks.push(one);
fatStacks.push(two);
fatStacks.push(three);
fatStacks.push(four);
fatStacks.push(five);
fatStacks.push(six);
fatStacks.push(seven);
fatStacks.push(eight);
fatStacks.push(nine);

const ins = instructions.split('\n');
for (const move of ins) {
  const numMoves = +move.substring(5, 7);
  const from = +move.substring(12, 14);
  const to = +move.substring(move.length - 1);

  if (!from) {
    console.log('blah')
  }

  const newStack = [];

  for (let i = 0; i < numMoves; i++) {
    // move this many times
    const stack = fatStacks[from - 1];
    const oldOne = stack.pop();
    newStack.push(oldOne);
    // For part 1
    // fatStacks[to - 1].push(oldOne);
  }

  while (newStack.length > 0) {
    const oldOne = newStack.pop();
    fatStacks[to - 1].push(oldOne);
  }
}

console.log(fatStacks);