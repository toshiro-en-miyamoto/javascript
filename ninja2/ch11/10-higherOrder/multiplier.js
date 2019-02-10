function multiplier(x) {
    return function(y) {
        return x*y;
    }
}

module.exports = multiplier;