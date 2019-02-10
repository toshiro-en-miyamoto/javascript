'use strict';

test('ES5 needs to assign one by one', () => {
    const node = {
        type: 'Identifier',
        name: 'foo'
    };

    const type = node.type;
    const name = node.name;

    expect(type).toBe('Identifier');
    expect(name).toBe('foo');
});

test('ES6 destructs objects', () => {
    const node = {
        type: 'Identifier',
        name: 'foo'
    };

    const {type, name} = node;

    expect(type).toBe('Identifier');
    expect(name).toBe('foo');
});

test('destructing an object assigns', () => {
    const node = {
        type: 'Identifier',
        name: 'foo'
    };

    let type = 'Literal';
    let name = 5;

    ({type, name} = node);

    expect(type).toBe('Identifier');
    expect(name).toBe('foo');
});

test('destructing with default values', () => {
    const node = {
        type: 'Identifier',
        name: 'foo'
    };

    const {type, name, value = true} = node;

    expect(type).toBe('Identifier');
    expect(name).toBe('foo');
    expect(value).toBeTruthy();
});

test('destructing to different variable names', () => {
    const node = {
        type: 'Identifier',
        name: 'foo'
    };

    const {
        type: localType,
        name: localName,
        value: localValue = false
    } = node;

    expect(localType).toBe('Identifier');
    expect(localName).toBe('foo');
    expect(localValue).toBeFalsy();
});

test('destructing nested objects', () => {
    const node = {
        type: 'Identifier',
        name: 'foo',
        loc: {
            start: {
                line: 1,
                column: 1
            },
            end: {
                line: 1,
                column: 4
            }
        }
    };

    const {
        loc: { start }
    } = node;

    const {
        loc: { start: localStart }
    } = node;

    expect(start.line).toBe(1);
    expect(start.column).toBe(1);
    expect(localStart.line).toBe(1);
    expect(localStart.column).toBe(1);
});