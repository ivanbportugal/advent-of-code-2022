import { promises as fs } from 'fs';

const readFile = async (fileName = './input.txt') => {
  const buffer = await fs.readFile(fileName);
  return buffer.toString();
}

export { readFile }
