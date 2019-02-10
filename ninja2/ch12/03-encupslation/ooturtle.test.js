const Turtle = require('./ooturtle');
const raph = new Turtle('Raphael', 'Red');

test('Turtle color is encapsulated', () => {
    expect(raph._color).toBeUndefined();
    expect(raph.getColor()).toBe('Red');
    expect(raph.setColor('Blue')).toBe('Blue');
    expect(raph.getColor()).toBe('Blue');
});