const Human = require('./human');
const Superhuman = Object.create(Human);

Superhuman.change = function() {
    return `${this.realName} is ${this.name}`;
};
Superhuman.name = 'Name needed';
Superhuman.realName = 'Real name neede';

Superhuman.init = function(name, realName) {
    this.name = name;
    this.realName = realName;
    this.init = undefined;
    return this;
};

module.exports = Superhuman;