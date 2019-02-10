'use strict';

function run(taskDef) {
    let value = 0;

    // create the iterator
    const task = taskDef();
    // start the task
    let result = task.next();

    function step() {
        if(!result.done) {
            value++;
            result = task.next();
            step();
        }
    }

    step();
    return value;
}

const n = run(
    function *() {
        yield;
        yield;
        yield;
    }
);

console.log(n);