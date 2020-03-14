class Slide {

    constructor(slide) {
        this.slide = slide;
    }

    slideDown(parentsTotal, currentLayer, currentColumn) {
        const currentTotal = parentsTotal + this.slide.layers[currentLayer][currentColumn];
        if (currentLayer === (this.slide.depth - 1)) {
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

module.exports = Slide;