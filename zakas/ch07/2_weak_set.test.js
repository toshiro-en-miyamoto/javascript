'use strict';

test('strong sets store object references', () => {
    const set = new Set();

    let key = {
        value: '5'
    };

    set.add(key);
    expect(set.size).toBe(1);

    // eliminate original reference
    key = null;

    expect(set.size).toBe(1);

    key = [...set][0];
    expect(key.value).toBe('5');

    /**
     * If your JavaScript code is running in a web page and needs
     * to keep track of DOM elements that might be remooved by
     * another script, you don't want your code holding onto the
     * last reference to a DOM element. That situation is called
     * a memory leak.
     */
});

test('weak sets remove the last reference', () => {
    const set = new WeakSet();

    let key = {
        value: '5'
    };

    set.add(key);
    expect(set.has(key)).toBeTruthy();

    expect(set.size).toBeUndefined();
    expect(() => {set.add(7);}).toThrow();
    expect(() => {set.keys();}).toThrow();
    expect(() => {set.forEach(k => console.log(k));}).toThrow();
    expect(() => {[...set][0];}).toThrow();

    // eliminate original reference
    key = null;
});