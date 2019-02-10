test('functions have their names', () => {
    function f1() {}
    const f2 = function() {};

    expect(f1.name).toBe('f1');
    expect(f2.name).toBe('f2');

    const f3 = function f4() {};

    expect(f3.name).toBe('f4');

    const person = {
        firstName() {
            return 'first name';
        },
        sayName: function() {
        }
    };

    expect(person.firstName.name).toBe('firstName');
    expect(person.sayName.name).toBe('sayName');
});

test('getter and setter methods have their names', () => {
    const person = {
        get firstName() {
        },
        set firstName(value) {
            this.firstName = value;
        },
        sayName: function() {
        }
    };

    const descriptor
    = Object.getOwnPropertyDescriptor(person, 'firstName');

    expect('get' in descriptor).toBeTruthy();
    expect('set' in descriptor).toBeTruthy();
});