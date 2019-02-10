'use strict';

const person = {
    getGreeting() {
        return 'Hello';
    }
};

const dog = {
    getGreeting() {
        return 'Woof';
    }
};

test('overriding a method in ES5', () => {
    const friend = {
        getGreeting() {
            const that = Object.getPrototypeOf(this);
            return that.getGreeting.call(this) + ', hi!';
        }
    };

    Object.setPrototypeOf(friend, person);

    expect(friend.getGreeting()).toBe('Hello, hi!');
    expect(Object.getPrototypeOf(friend)).toBe(person);

    Object.setPrototypeOf(friend, dog);

    expect(friend.getGreeting()).toBe('Woof, hi!');
    expect(Object.getPrototypeOf(friend)).toBe(dog);
});

test('super in ES6 is a pointer to the prototype', () => {
    const friend = {
        // the concise method decalaration is ciritical
        getGreeting() {
            return super.getGreeting() + ', hi!';
        }

        // getGreeting: function() {  -- results in a syntax error
    };

    Object.setPrototypeOf(friend, person);

    expect(friend.getGreeting()).toBe('Hello, hi!');
    expect(Object.getPrototypeOf(friend)).toBe(person);

    Object.setPrototypeOf(friend, dog);

    expect(friend.getGreeting()).toBe('Woof, hi!');
    expect(Object.getPrototypeOf(friend)).toBe(dog);
});