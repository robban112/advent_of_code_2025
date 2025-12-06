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

function readFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8'); 
        return data;
    } catch (err) {
        console.error(`Error reading file at ${filePath}:`, err.message);
        process.exitCode = 1;
        return null;
    }
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

function chunks(str, size) {
  if (typeof str !== 'string') return [];
  const n = Number(size);
  if (!Number.isFinite(n) || n <= 0) return [];
  const out = [];
  for (let i = 0; i < str.length; i += n) {
    out.push(str.slice(i, i + n));
  }
  return out;
}

function possibleChunks(str) {
  const n = typeof str === 'string' ? str.length : 0;
  const sizes = [];
  for (let size = 1; size < n; size++) {
    if (n % size === 0) sizes.push(size);
  }
  return sizes;
}

module.exports = { readLines, readFile, mod, chunks };
module.exports = { readLines, readFile, mod, chunks, possibleChunks };

