const path = require('path');
const { mod, readLines } = require('../helper/helper');

const inputPath = path.join(__dirname, 'input', 'input.txt');
const input = readLines(inputPath);

var point = 50;
var amountOfTimesAtZero = 0;

for (var inputLine of input) {
    const direction = inputLine[0];
    const distance = inputLine.slice(1, inputLine.length);

    if (direction === 'R') {
        point += parseInt(distance);
    } else if (direction === 'L') {
        point -= parseInt(distance);
    }

    point = mod(point, 100);
    if (point === 0) {
        amountOfTimesAtZero++;
    }
}

console.log(amountOfTimesAtZero);