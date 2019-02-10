const FindPattern = require('./find-pattern-class');
const pattern = new FindPattern(/hello \w+/g);

pattern
    .addFile('./web/mario2/ch02/2-observer/fileA.txt')
    .addFile('./web/mario2/ch02/2-observer/fileB.json')
    .find()
    .on('fileread', file =>
        console.log(`${file} was read`))
    .on('found', (file, match) =>
        console.log(`Matched ${match} in ${file}`))
    .on('error', err =>
        console.log(`Error emitted: ${err.message}`));
