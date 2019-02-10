'use strict';

function run(taskDef) {
    const task = taskDef();
    let result = task.next();

    function step() {
        if(!result.done) {
            if(typeof result.value === 'function') {
                result.value((err, data) => {
                    if(err) {
                        result = task.throw(err);
                        return;
                    }

                    result = task.next(data);
                    step();
                });
            } else {
                result = task.next(result.value);
                step();
            }
        }
    }

    step();
}

const fs = require('fs');

function readFile(filename) {
    return function(callback) {
        fs.readFile(filename, 'utf8', callback);
    }
}

run(function *() {
    let contents;
    // contents = yield readFile('web/README.md');
    try {
        contents = yield function(callback) {
            fs.readFile('web/README.md', 'utf8', callback);
        }
        console.log(contents);
    } catch(ex) {
        console.log('Oops');
        console.log(ex);
    }
});