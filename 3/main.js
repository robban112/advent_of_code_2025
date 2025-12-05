const path = require('path');
const { readLines } = require('../helper/helper');

const inputPath = path.join(__dirname, 'input', 'input.txt');
const input = readLines(inputPath);

var output = 0;

console.log(input);

function partOne() {
    for (var inp of input) {
        var numbers = Array.from(inp).map(n => parseInt(n, 10));
        var numbersWithoutLast = numbers.slice(0, numbers.length - 1);
        const max = Math.max(...numbersWithoutLast);
        const indexOfMax = numbers.indexOf(max);
        const rest = numbers.slice(indexOfMax + 1, numbers.length);

        console.log("Max: ", max, "at index", indexOfMax);
        const secondMax = Math.max(...rest);
        console.log("Second max: ", secondMax, "at index", numbers.indexOf(secondMax));

        output += parseInt(`${max}${secondMax}`);
    }

    console.log("output:", output);
}

function partTwo() {
    var length = 12;
    var result = 0;

    /* Returns the next valid battery number in line */
    function getNextValue(numbersLeft, length) {
        const possibleNumbers = numbersLeft.slice(0, numbersLeft.length - length + 1);
        const max = Math.max(...possibleNumbers);
        const indexOfMax = numbersLeft.indexOf(max);
        //console.log("possibleNumbers: ",possibleNumbers, "max:", max, "indexOfMax:", indexOfMax);
        return [max, indexOfMax];
    }

    for (var inp of input) {
        console.log(" --- inp:", inp);
        var output = "";
        var numbers = Array.from(inp).map(n => parseInt(n, 10));
        
        for (var i = 0; i < length; i++) {
            //console.log("numbers:", numbers);
            const nextValue = getNextValue(numbers, length - i);
            const max = nextValue[0];
            const indexOfMax = nextValue[1];
            
            numbers = numbers.slice(indexOfMax + 1, numbers.length);
            output += `${max}`;
        }
        //console.log("output: ", output);
        result += parseInt(output);
    }
    console.log("Final result:", result);
}

partTwo();