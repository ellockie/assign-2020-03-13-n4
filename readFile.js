var fs = require('fs');

const readInput = (fileName) => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(fileName)) {
            return reject(`File '${fileName}' not found.`)
        }
        fs.readFile(fileName, 'utf8', function(err, contents) {
            if (!err) {
                return resolve(contents);
            }
            reject(err);
        });
    })
}

module.exports = readInput;