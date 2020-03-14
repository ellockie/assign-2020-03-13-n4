const PyramidSlide = require('./fastestSlide.js');

const pyramid1 = {
    height: 4,
    layers: [
        [1],
        [2, 3],
        [4, 5, 6],
        [7, 8, 9, 10]
    ]
};

const pyramid2 = {
    height: 15,
    layers: [
        [75],
        [95, 64],
        [17, 47, 82],
        [18, 35, 87, 10],
        [20, 4, 82, 47, 65],
        [19, 1, 23, 75, 3, 34],
        [88, 2, 77, 73, 7, 63, 67],
        [99, 65, 4, 28, 6, 16, 70, 92],
        [41, 41, 26, 56, 83, 40, 80, 70, 33],
        [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
        [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
        [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
        [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
        [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
        [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
    ]
};


describe('Generic tests:', () => {

    const pyramidSlide = new PyramidSlide(pyramid1);

    test('pyramid is defined', () => {
        expect(pyramidSlide).toBeDefined();
    });

    test('pyramid.getFastestSlide() is defined', () => {
        expect(pyramidSlide.getFastestSlide).toBeDefined();
    });
});

describe('Example pyramid 1 tests:', () => {

    const pyramidSlide = new PyramidSlide(pyramid1);
    const fastestSlide = pyramidSlide.getFastestSlide();

    test('first node to be equal 1', () => {
        expect(pyramidSlide.pyramid.layers[0][0]).toBe(1);
    });

    test('the height of the pyramid is as specified', () => {
        expect(pyramidSlide.pyramid.height).toBe(pyramidSlide.pyramid.layers.length);
    });

    test('pyramid layers length is 4', () => {
        expect(pyramidSlide.pyramid.layers.length).toBe(4);
    });

    test('fastestSlide to be 14', () => {
        expect(fastestSlide).toBe(14);
    });
});

describe('Example pyramid 2 tests:', () => {

    const pyramidSlide = new PyramidSlide(pyramid2);
    const fastestSlide = pyramidSlide.getFastestSlide();

    test('the first node to be equal 75', () => {
        expect(pyramidSlide.pyramid.layers[0][0]).toBe(75);
    });

    test('the height of the pyramid is as specified', () => {
        expect(pyramidSlide.pyramid.height).toBe(pyramidSlide.pyramid.layers.length);
    });

    test('pyramid layers length is 15', () => {
        expect(pyramidSlide.pyramid.layers.length).toBe(15);
    });

    test('fastestSlide to be 447', () => {
        expect(fastestSlide).toBe(447);
    });
});