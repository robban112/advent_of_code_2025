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

function mod(n, m) {
  return ((n % m) + m) % m;
}

module.exports = { readLines, mod };

