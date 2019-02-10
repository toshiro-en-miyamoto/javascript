const me = { name: 'DAZ' };
me.age = 21;

test('a descriptor has four properties', () => {
    expect(Object.getOwnPropertyDescriptor(me, 'name'))
    .toMatchObject({
        value: 'DAZ',
        writable: true,
        enumerable: true,
        configurable: true
    });

    expect(Object.getOwnPropertyDescriptor(me, 'age'))
    .toMatchObject({
        value: 21,
        writable: true,
        enumerable: true,
        configurable: true
    });
});

Object.defineProperty(me, 'eyeColor', {
    value: 'black',
    writable: false,
    enumerable: true
});

test('a property can be defined', () => {
    expect(me)
    .toMatchObject({
        name: 'DAZ',
        age: 21,
        eyeColor: 'black'
    });

    expect(Object.getOwnPropertyDescriptor(me, 'eyeColor'))
    .toMatchObject({
        value: 'black',
        writable: false,
        enumerable: true,
        configurable: false
    });
});

me.eyeColor = 'blue';

test('not-writable properties cannot be updated', () => {
    expect(me.eyeColor).toBe('black');
});

me.retirementAge = 65;

Object.defineProperty(me, 'yearsToRetirement', {
    get() {
        if(this.age > this.retirementAge)
            return 0;
        else
            return this.retirementAge - this.age;
    },
    set(value) {
        this.age = this.retirementAge - value;
        return value;
    }
});

test('setter/getter control access to properties', () => {
    expect(me.yearsToRetirement).toBe(44);
    me.yearsToRetirement = 10;
    expect(me.age).toBe(55);
});