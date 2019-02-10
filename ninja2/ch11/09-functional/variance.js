function square(x) {
    return x*x;
}

function sum(array, callback) {
    if(callback)
        array = array.map(callback);
    return array.reduce((a,b) => a + b);
}

function mean(array) {
    return sum(array)/array.length;
}

function variance(array) {
    return sum(array, square)/array.length - square(mean(array));
}

module.exports = variance;