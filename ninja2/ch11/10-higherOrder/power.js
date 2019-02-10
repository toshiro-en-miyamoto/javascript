function power(x) {
    return function(power) {
        return Math.pow(x, power);
    }
}

module.exports = power;