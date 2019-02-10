const numbers = [2, 6, 7, 8, 1];

test('array.filter() with an arrow', () => {
    const even = numbers
        .filter(x => x%2 === 0);

    expect(even)
        .toEqual(expect.arrayContaining(
            [2, 6, 8]
        ));
});


function Greeter(name) {
    this.name = name;
}

Greeter.prototype.greet = function() {
    return `Hello, ${this.name}`;
};

test('a function keeps the scope of this', () => {
    const greeter = new Greeter('World');
    expect(greeter.greet()).toBe('Hello, World');
});

