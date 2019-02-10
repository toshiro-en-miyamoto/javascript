'use strict';

const person = {
    getGreeting() {
        return 'Hello';
    }
};

const dog = {
    getGreeting() {
        return "Woof";
    }
};

test('how to inhert from the prototype', () => {
    const friend = Object.create(person);
    expect(friend.getGreeting()).toBe('Hello');
    expect(Object.getPrototypeOf(friend)).toBe(person);
});

test('ES6 provides Object.setPrototypeOf()', () => {
    const friend = Object.create(person);
    Object.setPrototypeOf(friend, dog);
    expect(friend.getGreeting()).toBe('Woof');
    expect(Object.getPrototypeOf(friend)).toBe(dog);
});