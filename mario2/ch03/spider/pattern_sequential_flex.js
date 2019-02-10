'use strict';

const task1 = function(callback) {
    console.log('Task1 begins');
    const next = this.list[this.index++];
    return process.nextTick(() => next.call(callback));
};

const task2 = function(callback) {
    console.log('Task2 begins');
    const next = this.list[this.index++];
    return process.nextTick(() => next.call(callback));
};

const task3 = function(callback) {
    console.log('Task3 begins');
    return process.nextTick(() => callback());
};

const task = {
    index: 0,
    list: [ task1, task2, task3 ]
};

task1(task, () => {console.log('Tasks complete')});
