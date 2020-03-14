const Slide = require('./fastestSlide.js');

const slideParams = {
    depth: 4,
    layers: [
        [1],
        [2, 3],
        [4, 5, 6],
        [7, 8, 9, 10]
    ]
};
const slideParams2 = {
    depth: 15,
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

const slideGraph = new Slide(slideParams);
const fastestSlide = slideGraph.getFastestSlide();

// beforeAll(() => {});


describe('Simple tests:', () => {
    test('slide is defined', () => {
        expect(slideGraph).toBeDefined();
    });

    test('slide.getFastestSlide() is defined', () => {
        expect(slideGraph.getFastestSlide).toBeDefined();
    });

    test('fastestSlide is defined', () => {
        expect(slideGraph.getFastestSlide).toBeDefined();
    });

    test('first node to be equal 1', () => {
        expect(slideGraph.slide.layers[0][0]).toBe(1);
    });

    test('slideGraph.slide.layers.length is 4', () => {
        expect(slideGraph.slide.layers.length).toBe(4);
    });

    test('slideGraph.getChildren is defined', () => {
        expect(slideGraph.getChildren).toBeDefined();
    });

    test('2 to be a number', () => {
        expect(2).not.toBeNaN();
    });

    test('fastestSlide() to be a number', () => {
        expect(fastestSlide).not.toBeNull();
    });
});

describe('Object 1 tests:', () => {

    const slideGraph = new Slide(slideParams);
    const fastestSlide = slideGraph.getFastestSlide();

    test('fastestSlide to be larger than 0', () => {
        expect(fastestSlide).toBeGreaterThan(0);
    });
    test('fastestSlide to be 14', () => {
        expect(fastestSlide).toBe(14);
    });
});

describe('Object 2 tests:', () => {

    const slideGraph = new Slide(slideParams2);
    const fastestSlide = slideGraph.getFastestSlide();

    test('fastestSlide2 to be larger than 0', () => {
        expect(fastestSlide).toBeGreaterThan(0);
    });
    test('fastestSlide2 to be 447', () => {
        expect(fastestSlide).toBe(447);
    });
});