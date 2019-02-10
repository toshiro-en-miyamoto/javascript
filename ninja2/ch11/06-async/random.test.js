const random = require('./random');

test('random(6) ranges from 1 to 6', () => {
    const val = random(6);
    expect(1 <= val && val <= 6)
    .toBeTruthy();
});

test('random(3,8) ranges from 3 to 8', () => {
    const val = random(3, 8);
    expect(3 <= val && val <= 8)
    .toBeTruthy();
});

test('random(1,10,(n)=>n*n) ranges from 1 to 100', () => {
    const val = random(1, 10, (n) => n*n);
    expect(1 <= val && val <= 100)
    .toBeTruthy();
});

test('random(1,5,(n)=>2*n) ranges from 2 to 10', () => {
    const val = random(1, 5, (n) => 2*n);
    expect(2 <= val && val <= 10)
    .toBeTruthy();
});