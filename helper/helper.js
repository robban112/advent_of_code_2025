const fs = require('fs');

function readLines(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data.split(/\r?\n/);
  } catch (err) {
    console.error(`Error reading file at ${filePath}:`, err.message);
    process.exitCode = 1;
    return [];
  }
}

module.exports = { readLines };
const fs = require('fs');
const path = require('path');

function readInputLines(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        // Normalize line endings and filter out any trailing empty line
        const lines = data.split(/\r?\n/);
        return lines;
    } catch (err) {
        console.error(`Error reading file at ${filePath}:`, err.message);
        process.exitCode = 1;
        return [];
    }
}

// Resolve input.txt relative to this script's directory
const inputPath = path.join(__dirname, 'input', 'input.txt');
const list = readInputLines(inputPath);

// Print list to console
console.log(list);

