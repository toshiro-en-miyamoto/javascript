const Turtle = require('./turtle');

test('Instances have their own properties', () => {
    const leo = new Turtle('Leo');
    expect(leo.hasOwnProperty('name')).toBeTruthy();
    expect(leo.name).toBe('Leo');
});

test('Leo says Hi!', () => {
    const leo = new Turtle('Leo');
    expect(leo.sayHi()).toBe('Hi dude, my name is Leo');
});

test('Instances share prototype properties', () => {
    const raph = new Turtle('Raphael');
    const mike = new Turtle('Michelangelo');

    Turtle.prototype.weapon = 'hands';
    expect(Turtle.prototype).toMatchObject({weapon: 'hands'});

    expect(raph.hasOwnProperty('weapon')).toBeFalsy();
    expect(mike.hasOwnProperty('weapon')).toBeFalsy();

    expect(raph.weapon).toBe('hands');
    expect(mike.weapon).toBe('hands');

    Turtle.prototype.weapon = 'feet';
    expect(Turtle.prototype).toMatchObject({weapon: 'feet'});

    expect(raph.weapon).toBe('feet');
    expect(mike.weapon).toBe('feet');
});

test('Object.getPrototypeOf() returns the prototype', () => {
    const leo = new Turtle('Leo');
    const proto = Object.getPrototypeOf(leo);
    expect(proto).toMatchObject({});

    Turtle.prototype.weapon = 'hands';
    expect(proto).toMatchObject({weapon: 'hands'});

    Turtle.prototype.attack = function() {
        return `Feel the power of my ${this.weapon}`;
    };
    expect(leo.attack()).toBe('Feel the power of my hands');
});

test('Own properties take precedence over prototype', () => {
    const leo = new Turtle('Leo');
    
    Turtle.prototype.weapon = 'hands';
    expect(leo.weapon).toBe('hands');

    leo.weapon = 'Katana Blades';
    expect(leo.weapon).toBe('Katana Blades');

    const proto = Object.getPrototypeOf(leo);
    expect(proto.weapon).toBe('hands');
});