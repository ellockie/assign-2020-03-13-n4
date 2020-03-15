const readInput = require('./readFile');

const defaultInputFileName = 'input.txt';

class PyramidSlide {

    constructor(inputFileName) {
        this.inputFileName = inputFileName || defaultInputFileName;
        this.pyramid = {height: null, layers: []};
    }

    async loadInputString() {
        try {
            this.inputString = await readInput(this.inputFileName);
        } catch (err) {
            console.log("Problem when reading file: ", this.inputFileName, "\nError: ", err);
        }
    }

    processInput() {
        const lines = this.inputString.split('\n');
        const numberArrays = this.getNumberArrays(lines);
        this.pyramid.height = numberArrays.shift()[0];
        this.pyramid.layers = numberArrays;
    }

    addCurrentPathResult(result) {
        this.fastestSlide = this.fastestSlide === null || result < this.fastestSlide
            ? result
            : this.fastestSlide;
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

    // Public method(s)

    async getFastestSlide() {
        this.fastestSlide = null;
        await this.loadInputString();
        this.processInput();
        this.slideDown(0, 0, 0);
        console.log(this.fastestSlide);
        return this.fastestSlide;
    }
}

const main = () => {
    var myArgs = process.argv.slice(2);
    const inputFileName = myArgs.length ? myArgs[0] : defaultInputFileName;
    console.log('input file name: ', inputFileName);
    const pyramidSlide = new PyramidSlide(inputFileName);
    pyramidSlide.getFastestSlide();
}

main();

module.exports = PyramidSlide;