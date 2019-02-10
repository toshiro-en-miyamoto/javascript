const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
};

console.log('Before the roll');

const roll = new Promise((resolve, reject) => {
    const n = dice.roll();
    if(n > 1) 
        setTimeout(() => {resolve(n)}, n*200);
    else
        setTimeout(() => {reject(n)}, n*200);
});

roll
    .then(
        result => console.log(`Yes! I rolled a ${result}.`)
    )
    .catch(
        result => console.log(`No! Got a ${result}.`)
    );

console.log('After the roll');