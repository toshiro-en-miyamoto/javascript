const factorial = require('./factorial');

test('factorial of 5 equals 120', () => {
    expect(factorial(5))
        .toBe(120);
});