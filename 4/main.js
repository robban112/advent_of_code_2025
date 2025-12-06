const path = require('path');
const { readLines } = require('../helper/helper');

const inputPath = path.join(__dirname, 'input', 'input.txt');
const input = readLines(inputPath);

paper = '@';
maxPaper = 4;

class Grid {
    constructor(grid) {
        this.grid = grid;
    }

    get() {
        return this.grid;
    }

    clearPosition(x, y) {
        this.grid[x][y] = ".";
    }

    adjacent(x, y) {
        var adjacents = [];

        if (x > 0) {
            if (y > 0) {
                adjacents.push(grid[x-1][y-1]);
                
            }
            if (y < grid[x].length - 1) {
                adjacents.push(grid[x-1][y+1]);
            }
            adjacents.push(grid[x-1][y]);
        }

        if (y > 0) {
            adjacents.push(grid[x][y-1]);

            if (x < this.grid.length - 1) {
                adjacents.push(grid[x+1][y-1]);
            }
        }

        if (x < this.grid.length - 1) {
            adjacents.push(grid[x+1][y]);

            if (y < this.grid[x].length) {
                adjacents.push(grid[x+1][y+1]);
            }
        }

        if (y < this.grid[x].length - 1) {
            adjacents.push(grid[x][y+1]);
        }

        return adjacents;
    }
}


function getGrid() {
    grid = [];
    for (var line of input) {
        grid.push(line.split(''));
    }
    return new Grid(grid);
}

function partOne() {
    const gridCl = getGrid();
    const grid = gridCl.get();

    output = 0;

    for (var x = 0; x<grid.length; x++) {
        for (var y=0; y<grid[x].length; y++) {
            if (grid[x][y] !== paper) continue;
            const adjacents = gridCl.adjacent(x, y).filter((adj) => adj === paper);
            if (adjacents.length < maxPaper) {
                output++;
            }
        }
    }

    console.log("output partOne: ", output)
}

function partTwo() {
    const gridCl = getGrid();
    const grid = gridCl.get();
    var output = 0;
    var initial = true;
    var marks = [];
    var iteration = 0;
    while (initial || marks.length > 0) {
        marks = [];
        initial = false;
        console.log("iteration:", iteration, " marks: ", marks);
        iteration++;
        for (var x = 0; x<grid.length; x++) {
            for (var y=0; y<grid[x].length; y++) {
                if (grid[x][y] !== paper) continue;
                const adjacents = gridCl.adjacent(x, y).filter((adj) => adj === paper);
                if (adjacents.length < maxPaper) {
                    output++;
                    marks.push([x, y]);
                }
            }
        }

        if (marks.length !== 0) {
            console.log("Remove ", marks.length, " rolls of paper");
        }

        for (var mark of marks) {
            gridCl.clearPosition(mark[0], mark[1]);
        }
        
    }

    console.log("output partTwo: ", output)
}



partOne();
partTwo();
