const party = require('./party');

test('party() as a module is not redefined', () => {
    expect(party()).toBe('amazing');
    expect(party()).toBe('amazing');
    expect(party()).toBe('amazing');
});