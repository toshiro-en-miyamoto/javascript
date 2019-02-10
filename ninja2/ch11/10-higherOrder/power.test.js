const power = require('./power');

test('power(10)(4) yields 10000', () => {
    expect(power(10)(4)).toBe(10000);
});