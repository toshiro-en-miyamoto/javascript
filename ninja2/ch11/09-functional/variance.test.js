const variance = require('./variance');

test('variance([1,2,3]) to be close to (0.667, 3)', () => {
    expect(variance([1,2,3])).toBeCloseTo(0.667, 3);
});