"use strict";

test("passing arguments to iterators", () => {
    function *createIterator() {
        let first = yield 1;
        let second = yield first + 2;
        yield second + 3;
    }

    const iterator = createIterator();

    // return 1;
    expect(iterator.next().value).toBe(1);

    // first = 4;
    // return first + 2;
    expect(iterator.next(4).value).toBe(6);

    // second = 5;
    // return second + 3;
    expect(iterator.next(5).value).toBe(8);

    expect(iterator.next()).toEqual(
        expect.objectContaining({value: undefined, done: true})
    );
});

test("throwing errors in iterator", () => {
    function *createIterator() {
        let first = yield 1;
        let second = yield first + 2;
        yield second + 3;
    }

    const iterator = createIterator();

    // return 1;
    expect(iterator.next().value).toBe(1);

    // first = 4;
    // return first + 2;
    expect(iterator.next(4).value).toBe(6);

    // throwing an error before invoking second = 5;
    expect(() => iterator.throw(new Error("Boom"))).toThrow();

});

test("you can catch errors inside the generator", () => {
    function *createIterator() {
        let first = yield 1;
        let second;

        try {
            second = yield first + 2;
        } catch(ex) {
            second = 6;
        }
        yield second + 3;
    }

    const iterator = createIterator();

    // return 1;
    expect(iterator.next().value).toBe(1);

    // first = 4;
    // return first + 2;
    expect(iterator.next(4).value).toBe(6);

    // second = 6;
    // return second + 3;
    expect(iterator.throw(new Error("Boom")).value).toBe(9);

    expect(iterator.next()).toEqual(
        expect.objectContaining({value: undefined, done: true})
    );
});

test("return statements in generators", () => {
    function *createUnreachableIterator() {
        yield 1;
        return;
        // the following statements are unreachable
        yield 2;
        yield 3;
    }

    const iterator1 = createUnreachableIterator();
    expect(iterator1.next().value).toBe(1);
    expect(iterator1.next()).toEqual(
        expect.objectContaining({value: undefined, done: true})
    );

    function *createReachableIterator() {
        yield 1;
        return 42;
    }

    const iterator2 = createReachableIterator();
    expect(iterator2.next().value).toBe(1);
    expect(iterator2.next().value).toBe(42);
    expect(iterator2.next()).toEqual(
        expect.objectContaining({value: undefined, done: true})
    );
});

test("delegating generator", () => {
    function *createNumberIterator() {
        yield 1;
        yield 2;
    }

    function *createColorIterator() {
        yield "red";
        yield "green";
    }

    function *createCombinedIterator() {
        yield *createNumberIterator();
        yield *createColorIterator();
    }

    const iterator = createCombinedIterator();
    expect(iterator.next().value).toBe(1);
    expect(iterator.next().value).toBe(2);
    expect(iterator.next().value).toBe("red");
    expect(iterator.next().value).toBe("green");
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: undefined, done: true})
    );
});

test("delegating generators with return values", () => {
    function *createNumberIterator() {
        yield 1;
        yield 2;
        return 3;
    }

    function *createRepeatingIterator(count) {
        for(let i = 0; i < count; i++)
            yield "repeat";
    }

    function *createCombinedIterator1() {
        const result = yield *createNumberIterator();
        yield *createRepeatingIterator(result);
    }

    let iterator = createCombinedIterator1();
    expect(iterator.next().value).toBe(1);
    expect(iterator.next().value).toBe(2);
    expect(iterator.next().value).toBe("repeat");
    expect(iterator.next().value).toBe("repeat");
    expect(iterator.next().value).toBe("repeat");
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: undefined, done: true})
    );

    function *createCombinedIterator2() {
        const result = yield *createNumberIterator();
        yield result;
        yield *createRepeatingIterator(result);
    }

    iterator = createCombinedIterator2();
    expect(iterator.next().value).toBe(1);
    expect(iterator.next().value).toBe(2);
    expect(iterator.next().value).toBe(3);
    expect(iterator.next().value).toBe("repeat");
    expect(iterator.next().value).toBe("repeat");
    expect(iterator.next().value).toBe("repeat");
    expect(iterator.next()).toEqual(
        expect.objectContaining({value: undefined, done: true})
    );
});