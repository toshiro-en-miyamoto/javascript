const multiplier = require('./multiplier');

test('doubler(10) yields 20', () => {
    const doubler = multiplier(2);
    expect(doubler(10)).toBe(20);
});

test('tripler(10) yields 30', () => {
    const tripler = multiplier(3);
    expect(tripler(10)).toBe(30);
});