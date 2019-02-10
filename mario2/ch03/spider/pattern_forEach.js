'use strict';

my_forEach([1,2,3],
    (elem) => console.log(elem),
    () => console.log('Done')
);

function my_forEach(collection, task, done) {
    function iterate(index) {
        if(index === collection.length) {
            return process.nextTick(() => done());
        }

        task(collection[index]);
        process.nextTick(() => iterate(index+1));
    }

    iterate(0);
}
