function wait(message, callback, seconds) {
    setTimeout(callback, seconds * 1000);
    console.log(message);
}

function selfDestruct() {
    console.log('BOOOM');
}

wait('start', selfDestruct, 5);
console.log('hmmm');
