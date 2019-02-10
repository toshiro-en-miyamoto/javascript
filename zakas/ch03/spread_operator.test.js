test('spread operators split arrays', () => {
    const values = [25, 50, 75, 100];

    expect(Math.max(25, 50, 75, 100)).toBe(100);
    expect(Math.max(...values)).toBe(100);
});

test('spread operators accept additionals', () => {
    const values = [25, 50, 75, 100];

    expect(Math.max(25, 50, 75, 100, 125)).toBe(125);
    expect(Math.max(...values, 125)).toBe(125);
});
