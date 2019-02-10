const george = {
    name: 'George',
    surname: 'Boole',

    get fullname() {
        return `${this.name} ${this.surname}`;
    },

    set fullname(fullname) {
        let parts = fullname.split(' ');
        this.name = parts[0];
        this.surname = parts[1];
        // [*1] by default every set function returns the value that
        // is returned by the get function for the same property
    }
};

test('Object literal', () => {
    expect(george.fullname).toBe('George Boole');
    expect(george.fullname = 'Alan Turing').toBe('Alan Turing'); // [*1]
    expect(george.name).toBe('Alan');
});