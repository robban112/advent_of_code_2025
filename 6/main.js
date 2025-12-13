const path = require('path');
const { readLines } = require('../helper/helper');

const inputPath = path.join(__dirname, 'input', 'input.txt');
const input = readLines(inputPath);

function parseInput() {
    var nums = [];
    var ops = [];
    for (var line of input) {
        if (line.length == 0) continue;
        const splits = line.split(" ").filter((e) => e.length !== 0);
        if (line.includes("*") || line.includes("+")) {
            ops.push(splits);
        } else {
            nums.push(splits)
        }
    }
    return [nums, ops]
}

function partOne() {
    const [numsList, ops] = parseInput()
    var output = 0;
    for (var i = 0; i < numsList[0].length; i++) {
        const nums = numsList.map((e) => e[i]);
        const operator = ops[0][i];
        if (operator === '*') {
            output += nums.reduce((prev, curr) => prev * curr, 1);
        } else {
            output += nums.reduce((prev, curr) => prev + curr, 0);
        }
        
    }
    console.log("output: ",output)
}

function partTwo() {
    var lines = [];
    var ops = [];
    for (var line of input) {
        if (line.includes("*") || line.includes("+")) {
            ops = line.split(" ").filter((e) => e.length !== 0);
        } else {
            line += ' '
            lines.push(line)
        }
    }

    // Parse input
    var nums = [];
    var aggrLines = [];
    for (var i = 0; i < lines[0].length; i++) {
        aggrLines = [];
        for (var line of input) {
            if (!line.includes("*") && !line.includes("+")) {
                aggrLines.push(line[i]);
            }
        }
        nums.push(aggrLines);
    }

    // Go through input
    var x = 0;
    var aggr = [];
    var output = 0;
    for (var i = 0; i < nums.length; i++) {
        const subNums = nums[i];
        
        // If all is empty space it's a problem needed to solve
        if (subNums.every((num) => num === ' ') || i === nums.length - 1) {
            // split
            console.log(" ---- ")
            
            const operator = ops[x];
            if (operator === '*') {
                output += aggr.reduce((prev, curr) => prev * curr, 1);
            } else {
                output += aggr.reduce((prev, curr) => prev + curr, 0);
            }
            console.log("ops: ", operator, " aggr: ", aggr)
            aggr = [];
            x++;
        } else {
            aggr.push(Number(subNums.filter((e) => e !== ' ').reduce((prev, curr) => prev + curr + '')));
            console.log(subNums);
        }
    }
    console.log("output: ", output);
}

partOne();
partTwo();