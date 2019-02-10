'use strict';

my_reduce([1,2,3],
    10,
    (a, b) => a + b,
    res => console.log(res));   // 16 (= 10+6)

my_reduce([1,2,3],
    20,
    (a, b) => a - b,
    res => console.log(res));   // 14 (= 20-6)

my_reduce([1,2,3],
    [],
    (c, d) => {Array.prototype.push.call(c, d * d); return c;},
    res => console.log(res));   // [ 1, 4, 9 ]


let sum = 50;
my_reduce([1,2,3],
    sum,
    (a, b) => a + b,
    res => sum = res);
console.log(sum);       // 50 as callbacks haven't invoke yet
setTimeout(() => console.log(sum), 1000);   // 56 (= 50+6)

let sub = 30;
my_reduce([1,2,3],
    sub,
    (a, b) => a - b,
    res => sub = res);
console.log(sub);       // 30 as callbacks haven't invoke yet
setTimeout(() => console.log(sub), 1000);   // 24 (= 30-6)

let sqr = [];
my_reduce([4,5,6],
    sqr,
    (c, d) => {Array.prototype.push.call(c, d * d); return c;},
    res => sqr = res);
console.log(sqr);       // [ 16 ] as one callback has invoked somehow
setTimeout(() => console.log(sqr), 1000);   // [ 16, 25, 36 ]

function my_reduce(collection, identity, accumulator, done) {
    let result = identity;

    function iterate(index) {
        if(index == collection.length) {
            return done(result);
        }

        result = accumulator(result, collection[index]);
        process.nextTick(() => iterate(index + 1));
    }

    iterate(0);
}
