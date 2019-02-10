function counter(start) {
    let c = start;
    return () => {return c++;};
}

module.exports = counter;