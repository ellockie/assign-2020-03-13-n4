var fs = require('fs');

const readInput = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', function(err, contents) {
            resolve(contents);
        });
    })
}

module.exports = readInput;