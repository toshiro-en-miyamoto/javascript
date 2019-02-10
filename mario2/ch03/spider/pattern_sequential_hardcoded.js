'use strict';

task1(() => {console.log('Tasks complete')});

function task1(callback) {
    console.log('Task1 begins');
    return process.nextTick(() => task2(callback));
}

function task2(callback) {
    console.log('Task2 begins');
    return process.nextTick(() => task3(callback));
}

function task3(callback) {
    console.log('Task3 begins');
    return process.nextTick(() => callback());
}