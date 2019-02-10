const multiplier = require('./curriedMultiplier');

test('calsTax(400) yields 88', () => {
    const calcTax = multiplier(0.22);
    expect(calcTax(400)).toBe(88);
});