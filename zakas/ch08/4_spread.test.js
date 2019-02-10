'use strict';

test('the spread operator works on iterables', () => {
    const set = new Set([1,2,3,3,3,4,5]);
    const array = [...set];
    expect(array).toEqual(
        expect.arrayContaining([1,2,3,4,5])
    );
});

test('it works on the iterator Map.keys() returns', () => {
    const map = new Map([['name', 'Alice'], ['age', 14]]);

    const keys = [...map.keys()];
    expect(keys).toEqual(
        expect.arrayContaining(['name', 'age'])
    );
});

test('it works on Map as well', () => {
    const map = new Map([['name', 'Alice'], ['age', 14]]);

    const array = [...map];
    expect(array).toEqual(
        expect.arrayContaining([['name', 'Alice'], ['age', 14]])
    );
});