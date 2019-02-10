const fahrenheit = require('./fahrenheit');

test('fahrenheit(30) to be close to (86, 2)', () => {
    const f = fahrenheit();
    expect(f(30))
    .toBeCloseTo(86, 2);
});