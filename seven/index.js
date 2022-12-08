import { readFile } from './reader.js';

const stream = await readFile();
const data = stream.split('\n');

const root = {
  parent: undefined,
  name: 'root',
  files: [],
  totalFiles: 0,
  childDirs: []
};

let currentDir = root;

const dirsSizes = [];
// const smallestDeltaSizePair = {
//   delta: totalSpaceAvailable,
//   size: totalSpaceAvailable
// };

let entireSizeUnder100k = 0;
let isListing = false;
for (const command of data) {
  if (command === '$ cd /') {
    // Don't care about the root (there's only one)
    console.log('skipped root');
    continue;
  }

  if (command === '$ ls') {
    isListing = true;
    continue;
  }
  
  if (command.indexOf('$ cd') > -1) {
    isListing = false;
    if(command === '$ cd ..') {
      // go up a directory
      const currentSum = currentDir.totalFiles;
      // if (currentSum < 100000) {
        entireSizeUnder100k += currentSum;
      // }
      currentDir = currentDir.parent;
      currentDir.totalFiles += currentSum

      console.log(`Dir Size - ${currentDir.name}: ${currentDir.totalFiles}`);
      dirsSizes.push(currentDir.totalFiles);
      // const delta = totalSpaceAvailable - need - currentDir.totalFiles
      // dirsSizes[delta] = currentDir.totalFiles;
      // if (delta < smallestDeltaSizePair.delta) {
      //   smallestDeltaSizePair.delta = delta;
      //   smallestDeltaSizePair.size = currentDir.totalFiles;
      // }

    } else {
      // go down a directory
      const dirName = command.substring(5);
      currentDir = currentDir.childDirs.find((item) => item.name === dirName);
    }
    continue;
  }

  if (command.indexOf('dir ') > -1) {
    // dir
    let newDir = {
      parent: currentDir,
      name: command.substring(4),
      files: [],
      totalFiles: 0,
      childDirs: []
    }
    if (currentDir.childDirs.find((child) => child.name === command.substring(4)) !== undefined) {
      console.log('repeat!')
    } else {
      currentDir.childDirs.push(newDir);
    }
  } else {
    // file
    const theFile = command.split(' ');
    const sizeString = theFile[0];
    const size = +sizeString;
    const fileName = theFile[1];
    currentDir.files.push({ fileName, size });

    currentDir.totalFiles += size;
    // console.log(`SIZE - ${fileName}: ${size} (Total in ${currentDir.name}): ${currentDir.totalFiles}`);
  }

  // Not listing a directory, or changing directories
}


// Traverse tree and add them up (recursive)
// const goDeep = (node) => {
  
//   let totalSum = node.totalFiles;
//   if (node.childDirs.length > 0) {
//     for (let i = 0; i < node.childDirs.length; i++) {
//       const childDir = node.childDirs[i];
//       const childDirSum = goDeep(childDir);
//       totalSum += childDirSum;
//     }
//     if (totalSum < 100000) {
//       // report!
//       console.log('******found! ' + node.name + ' - ' + totalSum)
//       entireSizeUnder100k += totalSum;
//     } else {
//       console.log('total! ' + node.name + ' - ' + totalSum)
//     }
//   }

//   return totalSum;
// }

// goDeep(root);

function replacer(key,value)
{
  if (key=="parent") return undefined;
  else return value;
}

console.log(JSON.stringify(root, replacer));

console.log(entireSizeUnder100k);
// console.log(smallestDeltaSizePair);



// const totalSpaceAvailable = 70000000 - 167646984;
const goalSize = 30000000 - 70000000 - entireSizeUnder100k;
let minDiff = 1000000000000; // super large
let minSize = 0;

console.log('**** ' + root.totalFiles);
// console.log(dirsSizes);
for (const size of dirsSizes) {
  const currentDiff = Math.abs(size - goalSize);
  if (currentDiff < minDiff) {
    console.log(`lower diff found: ${minDiff} - size: ${size}`);
    minDiff = currentDiff;
    minSize = size;
  }
}

console.log(minSize);

// func part2() {
// 	flatNodes := getFlatNodes(rootNode)
// 	var minNode *Node
// 	minDiff := float64(10000000000000)
// 	goalSize := float64(30000000) - (float64(70000000) - float64(rootNode.size))
// 	for _, n := range flatNodes {
// 		thisDiff := math.Abs(float64(n.size) - goalSize)
// 		if thisDiff < minDiff {
// 			minDiff = thisDiff
// 			minNode = n
// 		}
// 	}
// 	fmt.Println(minNode.size)
// }