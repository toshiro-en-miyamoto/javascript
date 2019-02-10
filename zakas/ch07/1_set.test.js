'use strict';

test('sets basics', () => {
    const set = new Set();

    set.add(5);
    set.add(5);
    set.add('5');
    set.add({});
    set.add({});
    expect(set.size).toBe(4);

    expect(set.has(5)).toBeTruthy();
    set.delete(5);
    expect(set.has(5)).toBeFalsy();
    expect(set.size).toBe(3);

    set.clear();
    expect(set.size).toBe(0);
});

test('sets and arrays', () => {
    const set = new Set([1,2,3,4,5,5,5]);
    expect(set.size).toBe(5);

    const array = [...set];
    expect(array).toEqual(expect.arrayContaining([1,2,3,4,5]));
});

test('forEach() for sets', () => {
    const set = new Set([1,2]);

    const processor1 = {
        result: 0,
        reduce() {
            return this.result;
        },
        process(dataSet) {
            dataSet.forEach(function(value) {
                this.result += value;
            });
            return this;
        }
    };

    expect(() => {processor1.process(set).reduce();}).toThrow();

    const processor2 = {
        result: 0,
        reduce() {
            return this.result;
        },
        process(dataSet) {
            dataSet.forEach(function(value) {
                this.result += value;
            }, this);
            return this;
        }
    };

    expect(processor2.process(set).reduce()).toBe(3);

    const processor3 = {
        result: 0,
        reduce() {
            return this.result;
        },
        process(dataSet) {
            dataSet.forEach(value => {
                this.result += value;
            });
            return this;
        }
    };

    expect(processor3.process(set).reduce()).toBe(3);
});