class Slide {

    constructor(slide) {
        this.slide = slide;
    }

    getChildren(parentsTotal, currentLayer, currentColumn) {
        const nodeValue = this.slide.layers[currentLayer][currentColumn];
        const currentTotal = nodeValue + parentsTotal;
        if (currentLayer === (this.slide.depth - 1)) {
            this.values.push(currentTotal);
            return nodeValue;
        }
        return nodeValue +
            this.getChildren(currentTotal, currentLayer + 1, currentColumn) +
            this.getChildren(currentTotal, currentLayer + 1, currentColumn + 1);
    }

    getFastestSlide() {
        this.values = [];
        this.getChildren(0, 0, 0);
        return Math.min(...this.values);
    }
}

module.exports = Slide;