const ControlledDice = require('./setter-getter');

const yellowDice = new ControlledDice;

test('the dice is controlled', () => {
    expect(yellowDice.sides).toBe('This dice has 6 sides');
    yellowDice.sides = 10;
    expect((yellowDice.sides = 10)).toBe(10);
    expect(() => yellowDice.sides = -1).toThrow(Error);
});