'use strict';

function run(taskDef) {
    const task = taskDef();
    let result = task.next();

    function step() {
        console.log(result);
        if(!result.done) {
            result = task.next(result.value);
            step();
        }
    }

    step();
}

run(function *() {
    let value = yield 1;
    console.log(value);
    value = yield value + 3;
    console.log(value);

    // if the generator ends returning no value,
    // then third call to next() returns
    //      { value: undefined, done: true }

    return 99;
    // it the generator ends returning a value, say 99
    // then third call to next() returns
    //      { value: 99, done: true }
});

/**
    executing this code logs as follows:

    { value: 1, done: false }
    1
    { value: 4, done: false }
    4
    { value: 99, done: true }
*/