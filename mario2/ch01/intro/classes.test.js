class Person
{
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }

    static older(p1, p2) {
        return (p1.age > p2.age) ? p1 : p2;
    }
}

const mario = new Person('Mario', 'Casciaro', 5);
const lucia = new Person('Luciano', 'Mammino', 7);

test('Person.getFullName()', () => {
    expect(mario.getFullName()).toBe('Mario Casciaro');
});

test('Person.older()', () => {
    expect(Person.older(mario, lucia).name).toBe('Luciano');
});

class PersonWithMiddlename extends Person
{
    constructor(name, middlename, surname, age) {
        super(name, surname, age);
        this.middlename = middlename;
    }

    getFullName() {
        return `${this.name} ${this.middlename} ${this.surname}`;
    }
}

const watson = new PersonWithMiddlename('Thomas', 'J', 'Watson');

test('Person with middlename', () => {
    expect(watson.getFullName()).toBe('Thomas J Watson');
});