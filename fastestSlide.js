class PyramidSlide {

    constructor(pyramid) {
        this.pyramid = pyramid;
    }

    slideDown(parentsTotal, currentLayer, currentColumn) {
        const currentTotal = parentsTotal + this.pyramid.layers[currentLayer][currentColumn];
        // check if reached the bottom
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

    // Public method(s)

    getFastestSlide() {
        this.results = [];
        this.slideDown(0, 0, 0);
        return Math.min(...this.results);
    }
}

module.exports = PyramidSlide;