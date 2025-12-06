const path = require('path');
const {  possibleChunks, chunks, readFile } = require('../helper/helper');

const inputPath = path.join(__dirname, 'input', 'input.txt');
const input = readFile(inputPath);

const ranges = input.split(',');

var output = 0;

function partOne() {
    for (range of ranges) {
        const parts = range.split('-');
        const start = parseInt(parts[0], 10);
        const end = parseInt(parts[1], 10);

        for (var i = start; i <= end; i++) {
            const x = `${i}`.slice(0, `${i}`.length / 2);
            const y = `${i}`.slice(`${i}`.length / 2, `${i}`.length);
            if (x === y) {
                output += i;
            }
        }
    }

    console.log("output:", output);
}

function partTwo() {
    for (var range of ranges) {
        const parts = range.split('-');
        const start = parseInt(parts[0], 10);
        const end = parseInt(parts[1], 10);

        for (var i = start; i <= end; i++) {
            const value = `${i}`;
            const chunksSizes = possibleChunks(value);
            var invalidId = chunksSizes.map((size) => chunks(value, size))
                .filter((chunked) => chunked.every((val) => val === chunked[0])
                )[0]?.join('');
            if (invalidId) {
                output += parseInt(invalidId);
            }
        }
    }
    console.log("output:", output);
}

partTwo();