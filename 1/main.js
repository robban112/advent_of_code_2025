const path = require('path');
const { mod, readLines } = require('../helper/helper');

const inputPath = path.join(__dirname, 'input', 'input.txt');
const input = readLines(inputPath);

var point = 50;
var amountOfTimesAtZero = 0;

function partOne() {

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
}

function partTwo() {
    for (var inputLine of input) {
        const direction = inputLine[0];
        const distance = inputLine.slice(1, inputLine.length);
        const dist = parseInt(distance, 10);
        var oldPoint = point;
        var during = 0;
        if (direction === 'R') {

            // Calculate how many times we go through zero from oldPoint to point
            // By adding together oldPoint + dist - 1 and dividing by 100 we get how many times we passed zero
            // Subtract with 1 to avoid get a during since 0 to 100 is not passing zero
            during = Math.floor((oldPoint + dist - 1) / 100);
            point += dist;
            console.log(`The dial is rotated ${direction}${distance} from ${oldPoint} to point at ${mod(point, 100)} | ${point} it points at 0 DURING: ${during} POINT: ${mod(point, 100)}`);
        } else if (direction === 'L') {
            // If we start at 0 we will pass zero during the whole distance divided by 100
            if (oldPoint === 0) {
                during = Math.floor((dist - 1) / 100);
            } else if (dist <= oldPoint) {
                // We won't pass zero since dist is less than oldPoint e.g it won't pass through -100
                during = 0;
            } else {
                // We will pass zero once plus how many additional times we pass 100 after that
                // E.g 50 -> -150 will pass zero once and then another time when going from -100 to -150
                during = 1 + Math.floor((dist - 1 - oldPoint) / 100);
            }
            point -= dist;
            
            console.log(`The dial is rotated ${direction}${distance} from ${oldPoint} to point at ${mod(point, 100)} | ${point} it points at 0 DURING: ${during} POINT: ${mod(point, 100)}`);
        }

        point = mod(point, 100);

        amountOfTimesGoingThroughZero += during;
        if (point === 0) {
            amountOfTimesGoingThroughZero++;
        }
    }

    console.log(amountOfTimesGoingThroughZero);
}