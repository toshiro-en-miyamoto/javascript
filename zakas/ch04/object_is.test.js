'use strict';

test('equality test using Object.is()', () => {
    // in any version of ECMAScript
    expect(+0 == -0).toBeTruthy();
    expect(+0 === -0).toBeTruthy();

    expect(NaN == NaN).toBeFalsy();
    expect(NaN === NaN).toBeFalsy();

    expect(5 == '5').toBeTruthy();
    expect(5 === '5').toBeFalsy();

    //Object.is() is introduced in ES6
    expect(Object.is(+0, -0)).toBeFalsy();
    expect(Object.is(NaN, NaN)).toBeTruthy();
    expect(Object.is(5, '5')).toBeFalsy();
});