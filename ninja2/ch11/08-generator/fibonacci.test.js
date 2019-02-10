const fibonacci = require('./fibonacci');

test('the fifth value of Fibonacci sequence is 5', () => {
    const sequence = fibonacci(1,1);
    sequence.next();
    sequence.next();
    expect(sequence.next().value).toBe(5);
});