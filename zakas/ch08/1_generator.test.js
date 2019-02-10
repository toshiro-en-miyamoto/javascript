'use strict';

test('iterator with ES5', () => {
    function createIterator(items) {
        let i = 0;

        return {
            next: function() {
                let done = (i >= items.length);
                let value = !done ? items[i++] : undefined;
                return {
                    done: done,
                    value: value
                };
            }
        };
    }

    const iterator = createIterator([1, 2, 3]);

    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 1, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 2, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 3, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: undefined, done: true})
    );
});

test('generator basics', () => {
    function* createIterator() {
        yield 1;
        yield 2;
        yield 3;
    }

    const iterator = createIterator();

    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 1, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 2, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 3, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: undefined, done: true})
    );
});

test('for loops in generators', () => {
    function* createIterator(items) {
        for(let i = 0; i < items.length; i++)
            yield items[i];
    }

    const iterator = createIterator([1, 2, 3]);

    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 1, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 2, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 3, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: undefined, done: true})
    );
});

test('generator function expressions', () => {
    const createIterator = function* (items) {
        for(let i = 0; i < items.length; i++)
            yield items[i];
    }

    const iterator = createIterator([1, 2, 3]);

    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 1, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 2, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 3, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: undefined, done: true})
    );
});

test('generator functions in objects - ES5 style', () => {
    const object = {
        createIterator: function* (items) {
            for(let i = 0; i < items.length; i++)
                yield items[i];
        }
    };

    const iterator = object.createIterator([1, 2, 3]);

    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 1, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 2, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 3, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: undefined, done: true})
    );
});

test('generator functions in objects - ES6 style', () => {
    const object = {
        // method shorthand
        *createIterator(items) {
            for(let i = 0; i < items.length; i++)
                yield items[i];
        }
    };

    const iterator = object.createIterator([1, 2, 3]);

    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 1, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 2, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: 3, done: false})
    );
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: undefined, done: true})
    );
});