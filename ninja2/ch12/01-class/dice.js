const Dice = function(sides=6) {
    this.sides = sides;
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1);
    }
}

class Dice6 {
    constructor(sides = 6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1);
    }
}

module.exports = Dice;
module.exports = Dice6;