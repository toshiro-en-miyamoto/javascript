const curry = require('./curry');

test('receiprocal(2) yields 0.5', () => {
    const divider = (x, y) => x/y;
    const reciprocal = curry(divider, 1);
    expect(reciprocal(2)).toBe(0.5);
});