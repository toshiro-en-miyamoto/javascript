const sayHello = require('./sayHello');

test('Clark says Hello', () => {
    const clark = { name: 'Clark' };
    expect(sayHello.call(clark)).toBe('Hello, my name is Clark');
});

test('Bruce says How do you do', () => {
    const bruce = { name: 'Bruce' };
    expect(sayHello.call(bruce, 'How do you do'))
        .toBe('How do you do, my name is Bruce');
});