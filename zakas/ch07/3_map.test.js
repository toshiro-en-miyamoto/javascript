'use strict';

test('map basics', () => {
    const map = new Map();

    map.set('title', 'Alice');
    map.set('year', 1854);

    expect(map.size).toBe(2);
    expect(map.has('title')).toBeTruthy();
    expect(map.get('title')).toBe('Alice');
    expect(map.has('year')).toBeTruthy();
    expect(map.get('year')).toBe(1854);

    map.delete('title');
    expect(map.size).toBe(1);
    expect(map.has('title')).toBeFalsy();
    expect(map.get('title')).toBeUndefined();

    map.clear();
    expect(map.size).toBe(0);
    expect(map.has('year')).toBeFalsy();
    expect(map.get('year')).toBeUndefined();
});

test('maps and arrays', () => {
    const map = new Map([
        [ 'title', 'Alice' ],
        [ 'year', 1854 ]
    ]);

    expect(map.size).toBe(2);
    expect(map.get('title')).toBe('Alice');
    expect(map.get('year')).toBe(1854);
});

test('forEach() for maps', () => {
    const map = new Map([
        [ 'title', 'Alice' ],
        [ 'year', 1854 ]
    ]);

    const object = {};
    map.forEach((val, key, owner) => {
        object[key] = val;
    });

    expect(object).toEqual(expect.objectContaining(
        {'title': 'Alice', 'year': 1854}
    ));
});