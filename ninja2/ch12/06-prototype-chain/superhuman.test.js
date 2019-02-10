const Human = require('./human');
const Superhuman = require('./superhuman');

const superman = Object.create(Superhuman);
superman.name = 'Superman';
superman.realName = 'Clark Kent';

test('Superhuman is the prototype of Superman', () => {
    expect(superman.change())
    .toBe('Clark Kent is Superman');
});

const batman = Object.create(Superhuman);
batman.init('Batman', 'Bruce Wayne');

test('Batman uses init()', () => {
    expect(batman.change())
    .toBe('Bruce Wayne is Batman');
});

test('Prototype chain: Human - Superhuman', () => {
    expect(Superhuman.isPrototypeOf(superman)).toBeTruthy();
    expect(Human.isPrototypeOf(Superhuman)).toBeTruthy();
    expect(superman.walk()).toBe('walking');
});

const protoHuman = Object.getPrototypeOf(Human);

test('The prototype of Human is {}', () => {
    expect(Object.keys(protoHuman).length).toBe(0);
});

const protoSuperhuman = Object.getPrototypeOf(Superhuman);

test('The prototype of Superhuman is Human', () => {
    expect(Object.keys(protoSuperhuman).length).toBe(3);
    expect(Object.keys(protoSuperhuman))
        .toEqual(expect
        .arrayContaining(['arms','legs','walk']));
});

const protoSuperman = Object.getPrototypeOf(superman);

test('The prototype of Superman is Superhuman', () => {
    expect(Object.keys(protoSuperman).length).toBe(4);
    expect(Object.keys(protoSuperman))
        .toEqual(expect.
        arrayContaining(['change','name','realName','init']));
});