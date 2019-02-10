'use strict';

test('concise methods', () => {
    // ES5
    const person5 = {
        name: 'alice',
        getName: function() {
            return this.name;
        }
    };

    expect(person5.getName()).toBe('alice');

    // ES6
    const person6 = {
        name: 'alice',
        getName() {
            return this.name;
        }
    };

    expect(person6.getName()).toBe('alice');
});