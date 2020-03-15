const readInput = require('./readFile');

const defaultInputFileName = 'input.txt';

class PyramidSlide {

    constructor(inputFileName) {
        this.inputFileName = inputFileName || defaultInputFileName;
        this.pyramid = {height: null, layers: []};
    }

    slideDown(parentsTotal, currentLayer, currentColumn) {
        const currentTotal = parentsTotal + this.pyramid.layers[currentLayer][currentColumn];
        // check if reached the bottom of the pyramid
        if (currentLayer === (this.pyramid.height - 1)) {
            this.addCurrentPathResult(currentTotal);
            return;
        }
        this.slideDown(currentTotal, currentLayer + 1, currentColumn);
        this.slideDown(currentTotal, currentLayer + 1, currentColumn + 1);
    }

    addCurrentPathResult(result) {
        this.results.push(result);
    }

    processInput(inputString) {
        const lines = inputString.split('\n');
        const numberArrays = this.getNumberArrays(lines);
        this.pyramid.height = numberArrays.shift()[0];
        this.pyramid.layers = numberArrays;
    }

    getNumberArrays(lines) {
        return lines
            .map(line => this.getNumbersArray(line));
    }

    getNumbersArray(line) {
        return line.split(' ')
            .filter(str => str.length)
            .map(str => parseInt(str));
    }

    // Public method(s)

    async getFastestSlide() {
        this.results = [];
        try {
            this.inputString = await readInput(this.inputFileName);
        } catch (err) {
            console.log("Problem when reading file: ", this.inputFileName, "\nError: ", err);
        }
        this.processInput(this.inputString);
        this.slideDown(0, 0, 0);
        const fastestSlide = Math.min(...this.results);
        console.log("fastest slide:", fastestSlide);
        return fastestSlide;
    }
}

module.exports = PyramidSlide;