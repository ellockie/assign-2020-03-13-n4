const PyramidSlide = require('./fastestSlide.js');

const fileName1 = 'input1.txt';
const fileName2 = 'input2.txt';
const fileName3 = 'input3.txt';

describe('Generic tests:', () => {

    const pyramidSlide = new PyramidSlide(fileName1);

    test('pyramid is defined', () => {
        expect(pyramidSlide).toBeDefined();
    });

    test('pyramid.getFastestSlide() is defined', () => {
        expect(pyramidSlide.getFastestSlide).toBeDefined();
    });
});

describe('Example pyramid 1 tests:', () => {

    const pyramidSlide = new PyramidSlide(fileName1);
    const fastestSlide = pyramidSlide.getFastestSlide();

    test('the height of the pyramid is as specified', () => {
        return fastestSlide.then(() => {
            expect(pyramidSlide.pyramid.height)
                .toBe(pyramidSlide.pyramid.layers.length);
        });
    });

    test('pyramid layers length is 4', () => {
        return fastestSlide.then(() => {
            expect(pyramidSlide.pyramid.layers.length)
                .toBe(4);
        });
    });

    test('first node to be equal 1', () => {
        return fastestSlide.then(() => {
            expect(pyramidSlide.pyramid.layers[0][0])
                .toBe(1);
        });
    });

    test('fastestSlide to be 14', () => {
        return fastestSlide.then((result) => {
            expect(result).toBe(14);
        });
    });
});

describe('Example pyramid 2 tests:', () => {

    const pyramidSlide = new PyramidSlide(fileName2);
    const fastestSlide = pyramidSlide.getFastestSlide();

    test('the height of the pyramid is as specified', () => {
        return fastestSlide.then(() => {
            expect(pyramidSlide.pyramid.height)
                .toBe(pyramidSlide.pyramid.layers.length);
        });
    });

    test('pyramid layers length is 4', () => {
        return fastestSlide.then(() => {
            expect(pyramidSlide.pyramid.layers.length)
                .toBe(4);
        });
    });

    test('first node to be equal 1', () => {
        return fastestSlide.then(() => {
            expect(pyramidSlide.pyramid.layers[0][0])
                .toBe(3);
        });
    });

    test('fastestSlide to be 16', () => {
        return fastestSlide.then((result) => {
            expect(result).toBe(16);
        });
    });
});

describe('Example pyramid 3 tests:', () => {

    const pyramidSlide = new PyramidSlide(fileName3);
    const fastestSlide = pyramidSlide.getFastestSlide();

    test('the height of the pyramid is as specified', () => {
        return fastestSlide.then(() => {
            expect(pyramidSlide.pyramid.height)
                .toBe(pyramidSlide.pyramid.layers.length);
        });
    });

    test('pyramid layers length is 15', () => {
        return fastestSlide.then(() => {
            expect(pyramidSlide.pyramid.layers.length)
                .toBe(15);
        });
    });

    test('first node to be equal 75', () => {
        return fastestSlide.then(() => {
            expect(pyramidSlide.pyramid.layers[0][0])
                .toBe(75);
        });
    });

    test('fastestSlide to be 447', () => {
        return fastestSlide.then((result) => {
            expect(result).toBe(447);
        });
    });
});