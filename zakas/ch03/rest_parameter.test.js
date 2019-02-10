test('arguments object', () => {
    function pick(object) {
        const result = Object.create(null);

        for(let i = 1, len = arguments.length; i < len; i++) {
            result[arguments[i]] = object[arguments[i]];
        }    
        return result;
    }

    const book = {
        title: 'Understanding ECMAScript 6',
        author: 'Nicholas C. Zakas',
        year: 2016
    };

    const bookData = pick(book, 'author', 'year');

    expect(bookData.author).toBe('Nicholas C. Zakas');
    expect(bookData.year).toBe(2016);
});

test('rest parameters', () => {
    function pick(object, ...keys) {
        const result = Object.create(null);

        for(let i = 0, len = keys.length; i < len; i++) {
            result[keys[i]] = object[keys[i]];
        }    
        return result;
    }

    const book = {
        title: 'Understanding ECMAScript 6',
        author: 'Nicholas C. Zakas',
        year: 2016
    };

    const bookData = pick(book, 'author', 'year');

    expect(bookData.author).toBe('Nicholas C. Zakas');
    expect(bookData.year).toBe(2016);
});

test('rest parameters are to replace aurguments object', () => {
    function checkArgs(...args) {
        expect(args.length).toBe(2);
        expect(arguments.length).toBe(2);
        expect(args[0]).toBe(arguments[0]);
        expect(args[1]).toBe(arguments[1]);
    }
    checkArgs('a', 'b');
});