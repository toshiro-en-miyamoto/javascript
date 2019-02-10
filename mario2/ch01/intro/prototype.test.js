function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

Person.prototype.getFullName = function() {
    return `${this.name} ${this.surname}`;
};

Person.older = function(p1, p2) {
    return (p1.age > p2.age) ? p1 : p2;
};

const mario = new Person('Mario', 'Casciaro', 5);
const lucia = new Person('Luciano', 'Mammino', 7);

test('Person.getFullName()', () => {
    expect(mario.getFullName()).toBe('Mario Casciaro');
});

test('Person.older()', () => {
    expect(Person.older(mario, lucia).name).toBe('Luciano');
});
