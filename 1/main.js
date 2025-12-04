const path = require('path');
const { readLines } = require('../helper/helper');

// Resolve input.txt relative to this script's directory
const inputPath = path.join(__dirname, 'input', 'input.txt');
const list = readLines(inputPath);

// Print list to console
console.log(list);

