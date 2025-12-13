const path = require('path');
const { readLines } = require('../helper/helper');

const inputPath = path.join(__dirname, 'input', 'example.txt');
const input = readLines(inputPath);


function parseInput() {
    var ranges = [];
    var ids = [];
    for (var line of input) {
        if (line.length == 0) continue;
        const [first, second] = line.split("-").map(Number);
        if (line.includes("-")) {
            ranges.push([first, second]);
        } else {
            ids.push(parseInt(first))
        }
    }
    return [ranges, ids]
}

function partOne() {
    const [ranges, ids] = parseInput();
    const numFreshIds = ids.reduce((acc, id) => 
        acc + (ranges.some((range) => (id - range[0] >= 0) && (id <= range[1]))), 0);
    console.log("output: ",numFreshIds);
}

function partTwo() {
    const [ranges, _] = parseInput();
    console.log(ranges);
    var output = 0;
    var finished = 0;

    var index = 0;
    var changes = [];
    var removeRange = [];
    overlaps = 0;
    for (var currRange of ranges) {

        // Check if last overlaps first
        const overlapsLast = ranges
            .filter((range) => (range[0] !== currRange[0]) && (range[1] !== currRange[0]))
            .filter((range) => (currRange[1] >= range[0]) && (currRange[0] < range[0]))
            .reduce((acc, val) => acc[0] < val[0] ? val[0] : acc, [currRange[1]])

        // Check if overlaps entirely
        const overlapsEntireRange = ranges
            .filter((range) => (range[0] !== currRange[0]) && (range[1] !== currRange[0]))
            .find((range) => (currRange[1] >= range[0]) && (currRange[1] <= range[1]))
        
        console.log("overlaps for: ", currRange, "overlapsLast: ", overlapsLast, "overlapsEntire: ", overlapsEntireRange)

        if (overlapsEntireRange) {
            removeRange.push(currRange);
        } else if (overlapsLast) {

        }
        
        index++;
    }
   console.log("output:", output)
}

partOne();
partTwo();
