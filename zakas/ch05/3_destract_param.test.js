'use strict';

test('unable to know what options are expected', () => {
    function setCookie(name, value, options) {
        options = options || {};
        expect(options.secure).toBeTruthy();
        expect(options.domain).toBeUndefined();
        expect(options.expires).toBe(6000);
    }

    setCookie('type', 'js', {
        secure: true,
        expires: 6000
    });
});

test('destructed parameters can tell what options are expected', () => {
    function setCookie(name, value, { secure, path, domain, expires }) {
        expect(secure).toBeTruthy();
        expect(path).toBeUndefined();
        expect(domain).toBeUndefined();
        expect(expires).toBe(6000);
    }

    setCookie('type', 'js', {
        secure: true,
        expires: 6000
    });
});

test('optional destructed parameter', () => {
    function setCookie1(name, value, { secure, path, domain, expires }) {
        // JavaScript engine does this:
        // let { secure, path, domain, expires } = options
        // when the right value is undfined
        // JavaScript engine throws an error
    }

    expect(() => setCookie1('type', 'js')).toThrow();

    function setCookie2(name, value, { secure, path, domain, expires } = {}) {
        expect(secure).toBeUndefined();
        expect(path).toBeUndefined();
        expect(domain).toBeUndefined();
        expect(expires).toBeUndefined();
    }

    setCookie2('type', 'js');

    function setCookie3(name, value,
        {
            secure = false,
            path = '/',
            domain = 'example.com',
            expires = 30000 
        } = {}
    ) {
        expect(secure).toBeTruthy();
        expect(path).toBe('/');
        expect(domain).toBe('example.com');
        expect(expires).toBe(6000);
    }

    setCookie3('type', 'js', {
        secure: true,
        expires: 6000
    });
});