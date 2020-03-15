const readInput = require('./readFile');

const defaultInputFileName = 'input.txt';

class PyramidSlide {

    constructor(inputFileName) {
        this.inputFileName = inputFileName || defaultInputFileName;
        this.pyramid = { height: null, layers: [] };
    }

    async loadInputString() {
        try {
            this.inputString = await readInput(this.inputFileName);
        } catch (err) {
            console.error(`Error when reading file '${this.inputFileName}':\n${err}`);
        }
    }

    processInput() {
        const lines = this.inputString.split('\n');
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

    onSlideFinished(result) {
        this.fastestSlide = this.fastestSlide === null || result < this.fastestSlide ?
            result :
            this.fastestSlide;
    }

    slideDown(parentTotal, currentLayer, currentColumn) {
        const currentTotal = parentTotal + this.pyramid.layers[currentLayer][currentColumn];
        // check if reached the bottom of the pyramid
        if (currentLayer === (this.pyramid.height - 1)) {
            this.onSlideFinished(currentTotal);
            return;
        }
        this.slideDown(currentTotal, currentLayer + 1, currentColumn);
        this.slideDown(currentTotal, currentLayer + 1, currentColumn + 1);
    }

    // 'Public' method(s)

    async getFastestSlide() {
        this.fastestSlide = null;
        try {
            this.inputString = await readInput(this.inputFileName);
        } catch (err) {
            console.error(`Error when reading file '${this.inputFileName}':\n${err}`);
            return null;
        }
        this.processInput();
        this.slideDown(0, 0, 0);
        console.log(this.fastestSlide);
        return this.fastestSlide;
    }
}

const getFileNameFromArgs = () => {
    var myArgs = process.argv.slice(2);
    return myArgs.length
        ? myArgs[0]
        : defaultInputFileName;
}

const main = () => {
    const inputFileName = getFileNameFromArgs();
    console.log('Input file name: ', inputFileName);
    const pyramidSlide = new PyramidSlide(inputFileName);
    pyramidSlide.getFastestSlide();
}

main();

module.exports = PyramidSlide;