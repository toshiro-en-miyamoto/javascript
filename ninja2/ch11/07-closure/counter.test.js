const counter = require('./counter');

test('calling count() twise yields 2', () => {
    const count = counter(1);
    count();
    expect(count()).toBe(2);
});