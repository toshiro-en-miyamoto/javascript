function sayHello(greeting='Hello') {
    return `${greeting}, my name is ${this.name}`;
}
module.exports = sayHello;