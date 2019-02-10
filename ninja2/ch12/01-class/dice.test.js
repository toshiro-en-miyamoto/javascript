const Dice = require('./dice');

test('dice is an instance of Dice', () => {
    const dice = new Dice;
    expect(dice instanceof Dice).toBeTruthy();
});

const Dice6 = require('./dice');

test('dice6 is an instance of Dice6', () => {
    const dice6 = new Dice6;
    expect(dice6 instanceof Dice6).toBeTruthy();
});

test('new Dice6(12) has 12 sides', () => {
    const dice12 = new Dice6(12);
    expect(dice12.sides).toBe(12);
});

test('new dice6.constuctor() creates another Dice6', () => {
    const dice6 = new Dice6;
    const dice10 = new dice6.constructor(10);
    expect(dice6 instanceof Dice6).toBeTruthy();
    expect(dice6.sides).toBe(6);
    expect(dice10 instanceof Dice6).toBeTruthy();
    expect(dice10.sides).toBe(10);
});