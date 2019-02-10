'use strict';

test('property initializer shorthand', () => {
    const alice = {
        name: 'alice',
        age: 17
    };

    // ES5 and earlier
    function createPerson5(name, age) {
        return {
            name: name,
            age: age
        };
    }

    expect(createPerson5('alice', 17)).toEqual(
        expect.objectContaining(alice)
    );

    // ES6 the property initializer shorthand
    // When a property in an object literal only has
    // a name, the JS engine looks in the surrouding
    // scope for a variable of the same name. If it
    // finds one, the variable's value is assigned
    // to the same name on the object literal.
    function createPerson6(name, age) {
        return {
            name,
            age
        };
    }

    expect(createPerson6('alice', 17)).toEqual(
        expect.objectContaining(alice)
    );
});