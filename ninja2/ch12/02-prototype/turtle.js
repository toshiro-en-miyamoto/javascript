class Turtle
{
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
}

module.exports = Turtle;