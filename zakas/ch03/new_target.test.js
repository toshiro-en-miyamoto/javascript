test('ES5 uses instanceof', () => {
    function Person(name) {
        if(this instanceof Person) {
            this.name = name;
        } else {
            throw new Error('Use new with Person');
        }
    }

    expect(new Person('alice') instanceof Person).toBeTruthy();
    expect(() => {Person('witch');}).toThrow();
});

test('ES6 uses the new.target metaproperty', () => {
    function Person(name) {
        if(new.target === Person) {
            this.name = name;
        } else {
            throw new Error('Use new with Person');
        }
    }

    expect(new Person('alice') instanceof Person).toBeTruthy();
    expect(() => {Person('witch');}).toThrow();

    function AnotherPerson(name) {
        Person.call(this, name);
    }
    expect(() => {new AnotherPerson('witch');}).toThrow();
    
});