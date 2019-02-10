function random(a, b, callback) {
    if(b === undefined) {
        b = a;
        a = 1;
    }

    let result = Math.floor((b-a+1) * Math.random()) + a;

    if(callback)
        result = callback(result);

    return result;
}

module.exports = random;