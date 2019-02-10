const findPattern = require('./find-pattern');

findPattern(
    [
        './web/mario2/ch02/2-observer/fileA.txt',
        './web/mario2/ch02/2-observer/fileB.json'
    ],
    /hello \w+/g
    )
    .on('fileread', file =>
        console.log(`${file} was read`))
    .on('found', (file, match) =>
        console.log(`Matched ${match} in ${file}`))
    .on('error', err =>
        console.log(`Error emitted: ${err.message}`));