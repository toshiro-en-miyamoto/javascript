class ControlledDice {
    constructor(sides = 6) {
        Object.defineProperty(this, 'sides', {
            get() {
                return `This dice has ${sides} sides`;
            },
            set(value) {
                if(value > 0) {
                    sides = value;
                    return sides;
                } else {
                    throw new Error('Ooops');
                }
            }
        });

        this.roll = function() {
            return Math.floor(sides * Math.random() + 1);
        }
    }
}

module.exports = ControlledDice;