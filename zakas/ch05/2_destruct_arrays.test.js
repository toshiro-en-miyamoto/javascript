test('destructing operates on positions', () => {
    const colors = [ 'red', 'green', 'blue' ];

    const [ firstColor, secondColor ] = colors;
    const [ ,, thirdColor ] = colors;

    expect(firstColor).toBe('red');
    expect(secondColor).toBe('green');
    expect(thirdColor).toBe('blue');
});

test('assignment does not need parentheses', () => {
    const colors = [ 'red', 'green', 'blue' ];
    let firstColor = 'black',
        secondColor = 'purple';

    [ firstColor, secondColor ] = colors;

    expect(firstColor).toBe('red');
    expect(secondColor).toBe('green');
});

test('swapping in ES5', () => {
    let a = 1,
        b = 2,
        temp;

    temp = a;
    a = b;
    b = temp;

    expect(a).toBe(2);
    expect(b).toBe(1);
});

test('swapping in ES6 using destructing', () => {
    let a = 1,
        b = 2;

    [ b, a ] = [ a, b ];

    expect(a).toBe(2);
    expect(b).toBe(1);
});

test('default values', () => {
    const colors = [ 'red' ];

    const [ firstColor, secondColor = 'green' ] = colors;

    expect(firstColor).toBe('red');
    expect(secondColor).toBe('green');
});

test('destructing nested arrays', () => {
    const colors = [ 'red', [ 'green', 'lightgreen' ], 'blue' ];

    const [ firstColor, [ secondColor ]] = colors;
    const [ , [, thirdColor ]] = colors;

    expect(firstColor).toBe('red');
    expect(secondColor).toBe('green');
    expect(thirdColor).toBe('lightgreen');
});

test('destructing with rest items', () => {
    const colors = [ 'red', 'green', 'blue' ];

    const [ firstColor, ...restColors ] = colors;

    expect(firstColor).toBe('red');
    expect(restColors.length).toBe(2);
    expect(restColors[0]).toBe('green');
    expect(restColors[1]).toBe('blue');
});
