const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

console.log(dice.roll());
console.log(dice.roll());

dice.sides = 20;
console.log(dice.roll());
console.log(dice.roll());
