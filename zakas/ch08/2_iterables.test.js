'use strict';

test('for-of loops', () => {
    const values = [1, 2, 3];

    let sum = 0;
    for(let value of values)
        sum += value;

    expect(sum).toBe(6);
});

test('Symbol.iterator', () => {
    const values = [1, 2, 3];
    let iterator = values[Symbol.iterator]();

    let sum = 0;
    while(true) {
        let next = iterator.next();
        if(next.done) break;
        sum += next.value;
    }

    expect(sum).toBe(6);
});

test('Symbol.iterator returns an iterator function', () => {
    function isIterable(object) {
        return typeof object[Symbol.iterator] === 'function';
    }

    expect(isIterable([1,2,3])).toBeTruthy();
    expect(isIterable('Hello')).toBeTruthy();
    expect(isIterable(new Map())).toBeTruthy();
    expect(isIterable(new Set())).toBeTruthy();

    expect(isIterable(new WeakMap())).toBeFalsy();
    expect(isIterable(new WeakSet())).toBeFalsy();
});

test('creating iterables', () => {
    const collection = {
        items: [],
        *[Symbol.iterator]() {
            for(let item of this.items)
                yield item;
        }
    };

    collection.items.push(1);
    collection.items.push(2);
    collection.items.push(3);

    let sum = 0;
    for(let value of collection)
        sum += value;

    expect(sum).toBe(6);
});