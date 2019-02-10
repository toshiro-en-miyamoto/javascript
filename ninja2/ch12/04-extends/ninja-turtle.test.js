const NinjaTurtle = require('./ninja-turtle');
const raph = new NinjaTurtle('Raphael');

test('NinjaTurtle is a Turtle', () => {
    expect(raph.name).toBe('Raphael');
    expect(raph.sayHi()).toBe('Hi dude, my name is Raphael');
    expect(raph.swim()).toBe('Raphael paddles in the water');
    expect(raph.toString()).toBe('A turtle called Raphael');
    console.log(raph);
});

test('Ninja tutles have the method attack()', () => {
    expect(raph.weapon).toBe('hands');
    expect(raph.attack()).toBe('Feel the power of my hands');
});