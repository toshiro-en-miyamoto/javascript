if(false) {
    var var_x = 'hello';
    let let_x = 'hello';
}

test('var is accessible but undefined', () => {
    expect(var_x).toBeUndefined();
});

test('let raises a ReferenceError', () => {
    expect(() => let_x)
        .toThrow(ReferenceError);
});

const const_x = {};

test('const prevents from replacing ut', () => {
    expect(() => const_x = 'hey')
        .toThrow(TypeError);
});

test('const allows to change it', () => {
    const_x.name = 'John';
    expect(const_x.name).toBe('John');
});