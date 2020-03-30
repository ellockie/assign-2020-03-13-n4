# Finding a shortest path down a pyramid

## Features
- input loaded from file
- file operations / input validation
- data extraction, if mixed with non-numericals
- recursive traversal
- TDD-driven - test suite included
- controlled error propagation
- prints and outputs (returns) the number of "time" points collected along the fastest path down the pyramid
- no dependencies, but `jest` required as a dev dependency when testing needed
- 3 example pyramids included

## Usage examples

- `node fastestPath.js` - will use the default `index.txt` file as input.
- `node fastestPath.js input2.txt` - will use a `input2.txt` file as input.

## Testing
- `npm test` - runs test suite
- `npm run test:watch` - runs test suite in watch mode

## TODOs, nice-to-have's, maybe's
- convert to TypeScript
- convert to Python
- make it possible to use with pipes
- convert the input to a proper directed graph