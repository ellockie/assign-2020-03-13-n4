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
            console.error(`Error when reading file '${this.inputFileName}':`);
            throw err;
        }
    }

    processInput() {
        const lines = this.inputString.split('\n');
        const numberArrays = this.getNumberArrays(lines);
        let height = numberArrays.shift();
        this.pyramid.height = height[0];
        this.pyramid.layers = numberArrays;
    }

    getNumberArrays(lines) {
        return lines
            .map(line => this.getNumbersArray(line))
            // remove empty lines
            .filter(line => line.length);
    }

    getNumbersArray(line) {
        return line.split(' ')
            // remove empty elements
            .filter(str => str.length)
            // extract integers
            .map(str => parseInt(str))
            // remove NaN's
            .filter(item => !isNaN(item));
    }

    validateInput() {
        this.validateLayerNumbers();
        this.validateLayerElementNumbers();
    }

    validateLayerNumbers() {
        if (this.pyramid.height !== this.pyramid.layers.length) {
            throw `Error:  The number of layers (${this.pyramid.layers.length}) is different that expected (${this.pyramid.height})`;
        }
    }

    validateLayerElementNumbers() {
        const invalidLayers = this.pyramid.layers
            .filter((layer, index) => layer.length !== index + 1);
        if (invalidLayers.length) {
            throw `Error:  ${invalidLayers.length} layer(s) have invalid number of elements`;
        }
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
            return this.onSlideFinished(currentTotal);
        }
        this.slideDown(currentTotal, currentLayer + 1, currentColumn);
        this.slideDown(currentTotal, currentLayer + 1, currentColumn + 1);
    }

    // 'Public' method

    async getFastestSlide() {
        this.fastestSlide = null;
        try {
            await this.loadInputString(this.inputFileName);
            this.processInput();
            this.validateInput();
            this.slideDown(0, 0, 0);
        } catch (err) {
            console.error(`${err}`);
        }
        console.log('Result: ', this.fastestSlide);
        return this.fastestSlide;
    }
}

const getFileNameFromArgs = () => {
    var myArgs = process.argv.slice(2);
    return myArgs.length ?
        myArgs[0] :
        defaultInputFileName;
}

const main = () => {
    const inputFileName = getFileNameFromArgs();
    console.log(`Input file name used: '${inputFileName}'`);
    const pyramidSlide = new PyramidSlide(inputFileName);
    pyramidSlide.getFastestSlide();
}

main();

module.exports = PyramidSlide;