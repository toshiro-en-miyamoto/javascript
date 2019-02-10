const fs = require('fs');
const cache = {};

function readFileAsync(filename, callback) {
    if(cache[filename])
        process.nextTick(() =>
            callback(null, cache[filename])
        );
    else
        fs.readFile(filename, 'utf8', (err, data) => {
            if(err)
                return callback(err);
            else {
                cache[filename] = data;
                callback(null, data);
            }
        });
}

function createFileReader(filename) {
    const listeners = [];
    readFileAsync(filename, (err, value) => {
        listeners.forEach(listener => listener(err, value));
    });

    return {
        onDataReady: listener => listeners.push(listener)
    };
}

// console.log(process.cwd());
const DATA_TXT = './web/mario2/ch02/0-async/data.txt';
const reader1 = createFileReader(DATA_TXT);
reader1.onDataReady((err, data) => {
    if(err)
        throw(err);
    else
        console.log(`First: ${data}`);

    const reader2 = createFileReader(DATA_TXT);
    reader2.onDataReady((err, data) => {
        if(err)
            throw(err);
        else
            console.log(`Second: ${data}`);
    });
});
