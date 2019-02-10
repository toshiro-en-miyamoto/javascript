const profiles = new Map();

profiles.set('twitter', '@adalovelace');
profiles.set('facebook', 'adalovelace');
profiles.set('googleplus', 'ada');

test('Map', () => {
    expect(profiles.has('twitter')).toBeTruthy();
    expect(profiles.get('twitter')).toBe('@adalovelace');
    expect(profiles.has('youtube')).toBeFalsy();

    profiles.delete('facebook');
    expect(profiles.has('facebook')).toBeFalsy();
    expect(profiles.get('facebook')).toBeUndefined();

    let a = [];
    for(const entry of profiles)
        a.push(`${entry}`);

    expect(a).toEqual(expect.arrayContaining(
        ['twitter,@adalovelace', 'googleplus,ada']
    ));
});

const tests = new Map();
tests.set(() => 2+2, 4);
tests.set(() => 2*3, 6);
tests.set(() => 2/2, 1);

test('Keys can be functions', () => {
    for(const entry of tests)
        expect(entry[0]()).toBeCloseTo(entry[1], 2);
});