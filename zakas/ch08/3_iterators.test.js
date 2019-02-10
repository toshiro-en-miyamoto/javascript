'use strict';

test('entries(), keys() with arrays', () => {
    const colors = [ 'red', 'green', 'blue' ];

    let result = {};
    for(let entry of colors.entries())
        result[entry[0]] = entry[1];

    expect(result).toEqual(
        expect.objectContaining({
            '0': 'red',
            '1': 'green',
            '2': 'blue'
        })
    );

    result = [];
    for(let key of colors.keys())
        result.push(key);

    expect(result).toEqual(
        expect.arrayContaining([ 0, 1, 2 ])
    );

    // colors.values() does not work
    // use the default iterator instead
    result = [];
    for(let value of colors)
        result.push(value);

    expect(result).toEqual(
        expect.arrayContaining([ 'red', 'green', 'blue' ])
    );
});

test('entries(), keys(), values() with sets', () => {
    const tracking = new Set([1234, 5678, 9012]);

    let result = {};
    for(let entry of tracking.entries())
        result[entry[0]] = entry[1];

    expect(result).toEqual(
        expect.objectContaining({
            '1234': 1234,
            '5678': 5678,
            '9012': 9012
        })
    );

    result = [];
    for(let key of tracking.keys())
        result.push(key);

    expect(result).toEqual(
        expect.arrayContaining([ 1234, 5678, 9012 ])
    );

    result = [];
    for(let value of tracking.values())
        result.push(value);

    expect(result).toEqual(
        expect.arrayContaining([ 1234, 5678, 9012 ])
    );

    result = [];
    for(let value of tracking)
        result.push(value);

    expect(result).toEqual(
        expect.arrayContaining([ 1234, 5678, 9012 ])
    );
});

test('entries(), keys(), values() with maps', () => {
    const data = new Map();
    data.set('title', 'Alice');
    data.set('format', 'ebook');

    let result = {};
    for(let entry of data.entries())
        result[entry[0]] = entry[1];

    expect(result).toEqual(
        expect.objectContaining({
            'title': 'Alice',
            'format': 'ebook'
        })
    );

    result = [];
    for(let key of data.keys())
        result.push(key);

    expect(result).toEqual(
        expect.arrayContaining([ 'title', 'format' ])
    );

    result = [];
    for(let value of data.values())
        result.push(value);

    expect(result).toEqual(
        expect.arrayContaining([ 'Alice', 'ebook' ])
    );

    result = [];
    for(let value of data)
        result.push(value);

    expect(result).toEqual(
        expect.arrayContaining([
            [ 'title', 'Alice' ],
            [ 'format', 'ebook' ]
        ])
    );

    result = [];
    for(let [key, value] of data)
        result.push(`${key}=${value}`);

    expect(result).toEqual(
        expect.arrayContaining([
            'title=Alice',
            'format=ebook'
        ])
    );
});

test('for-of loop supports Unicode in strings', () => {
    const message = 'A字B';

    const result = [];
    for(let c of message)
        result.push(c);

    expect(result).toEqual(
        expect.arrayContaining([ 'A', '字', 'B' ])
    );
});