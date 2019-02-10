const Human = require('./human');
const lois = Object.create(Human);

test('Human is the prototype of lois', () => {
    expect(lois.arms).toBe(2);
    expect(lois.legs).toBe(2);
    expect(lois.walk()).toBe('walking');
    expect(Human.isPrototypeOf(lois)).toBeTruthy();
});

const jimmy = Object.create(Human, {
    name: { value: 'Jimmy Olsen', enumerable: true },
    job: { value: 'Photographer', enumerable: true }
});

test('jimmy has more properties', () => {
    expect(jimmy.name).toBe('Jimmy Olsen');
    expect(jimmy.job).toBe('Photographer');
});