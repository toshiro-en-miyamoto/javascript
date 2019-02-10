test('Expressions in template literals', () => {
    let count = 10,
        price = 0.25,
        message = `${count} items cost $${(count * price).toFixed(2)}`;

    expect(message).toBe('10 items cost $2.50');
});

test('Tagged templates', () => {
    function sayit(literals, ...substitutions) {
        let result = '';
        for(let i = 0; i < substitutions.length; i++) {
            result += literals[i];
            result += substitutions[i];
        }
        return result + literals[literals.length - 1];
    }

    let name = 'Zakas',
        title = 'Mr.',
        message = `Good morning, ${title} ${name}!`;

    expect(sayit`${message}`).toBe('Good morning, Mr. Zakas!');

        name = '山田',
        title = '先生',
        message = `${name}${title}、おはようございます。`;

    expect(sayit`${message}`).toBe('山田先生、おはようございます。');
});