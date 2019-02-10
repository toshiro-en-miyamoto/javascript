'use strict';

test('computed property names in object literals', () => {
    // ES5
    const propName = 'first name';
    const person5 = {
        'first name': 'alice'
    };

    expect(person5[propName]).toBe('alice');

    // ES6
    const person6a = {
        [propName]: 'alice'
    };

    expect(person6a[propName]).toBe('alice');

    const suffix = ' name';
    const person6b = {
        ['first' + suffix]: 'alice'
    };

    expect(person6b[propName]).toBe('alice');
})