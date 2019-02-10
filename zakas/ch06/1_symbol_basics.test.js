'use strict';

test('computed property names in Chapter 4', () => {
    const propName = 'first name';

    const person6a = {
        [propName]: 'alice'
    };

    expect('first name' in person6a).toBeTruthy();
    expect(person6a[propName]).toBe('alice');

    const suffix = ' name';
    const person6b = {
        ['first' + suffix]: 'alice'
    };

    expect('first name' in person6b).toBeTruthy();
    expect(person6b[propName]).toBe('alice');
});

test('symbols basics', () => {
    const person = {};

    const firstName = Symbol('first name');
    person[firstName] = 'alice';

    expect('first name' in person).toBeFalsy();
    expect(person['first name']).toBeUndefined();

    expect(person[firstName]).toBe('alice');

    expect(typeof firstName === 'symbol').toBeTruthy();
    expect(firstName.toString()).toBe('Symbol(first name)');
});

test('Object.defineProperty() to use symbols', () => {
    const firstName = Symbol('first name');

    let person = {
        [firstName]: 'alice'
    };
    expect(person[firstName]).toBe('alice');

    person[firstName] = 'Alice';
    expect(person[firstName]).toBe('Alice');

    Object.defineProperty(person, firstName, { writable: false });
    expect(() => {person[firstName] = 'Mary';}).toThrow();

    const lastName = Symbol('last name');

    Object.defineProperties(person, {
        [lastName]: {
            value: 'Liddell',
            writable: false
        }
    });

    expect(person[lastName]).toBe('Liddell');
    expect(() => {person[lastName] = 'Oxford';}).toThrow();
});

test('global symbol sharing', () => {
    const object = {};
    const uid1 = Symbol.for('shared uid');
    object[uid1] = 12345;

    const uid2 = Symbol.for('shared uid');
    expect(object[uid2]).toBe(12345);

    expect(Symbol.keyFor(uid1)).toBe('shared uid');
    expect(Symbol.keyFor(uid2)).toBe('shared uid');

    const uid3 = Symbol('shared uid');
    expect(Symbol.keyFor(uid3)).toBeUndefined();
});

test('Object.getOwnPropertySymbols()', () => {
    const person = {
        name: 'Jane',
        age: 24
    };

    let properties = Object.getOwnPropertyNames(person);
    expect(properties.length).toBe(2);

    let symbols = Object.getOwnPropertySymbols(person);
    expect(symbols.length).toBe(0);

    const uid = Symbol.for('uid');
    person[uid] = 12345;

    properties = Object.getOwnPropertyNames(person);
    expect(properties.length).toBe(2);

    symbols = Object.getOwnPropertySymbols(person);
    expect(symbols.length).toBe(1);
});