
test('ES2015 support UTF-16', () => {
    let text = '𠮷';    // U+20BB7 -- (0xD842, 0xDFB7)
    expect(text.codePointAt(0)).toBe(0x20BB7);
    expect(text.codePointAt(1)).toBe(0xDFB7);
    expect(text.length).toBe(2);
    expect(text.charCodeAt(0)).toBe(0xD842);
    expect(text.charCodeAt(1)).toBe(0xDFB7);
    expect(String.fromCodePoint(0x20BB7)).toBe(text);
});

test('ES2015 Regular Expression u Flag', () => {
    let text = '𠮷';    // U+20BB7 -- (0xD842, 0xDFB7)
    expect(/^.$/.test(text)).toBeFalsy();
    expect(/^.$/u.test(text)).toBeTruthy();

    function codePointLength(str) {
        // result contains an array of code points
        let result = str.match(/[\s\S]/gu);
        return result ? result.length : 0;
    }

    expect(text.length).toBe(2);
    expect(codePointLength(text)).toBe(1);
    
});