'use strict';

test('Symbol.toPrimitive()', () => {
    function Temperature(degrees) {
        this.degrees = degrees;
    }

    Temperature.prototype[Symbol.toPrimitive]
    = function (hint) {
        switch(hint) {
            case 'string':
                return `${this.degrees}\u00b0`;
            case 'number':
                return this.degrees;
            case 'default':
                return `${this.degrees} degrees`;
        }
    };

    const freezing = new Temperature(-10);

    expect(`${freezing}`).toBe('-10°');
    expect(freezing / 2).toBe(-5);
    expect(freezing + '!').toBe('-10 degrees!');
});