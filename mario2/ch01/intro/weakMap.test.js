const map = new WeakMap();

let obj = {};
map.set(obj, {key: 'some_value'});

test('WeakMap', () => {
    expect(map.has(obj)).toBeTruthy();
    obj = undefined;    // causes the entry of the map to be deleted
    obj = {};
    expect(map.has(obj)).toBeFalsy();
});