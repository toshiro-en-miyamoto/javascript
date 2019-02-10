const Superhuman = require('./superhuman');

const superman = Object.create(Superhuman);
superman.name = 'Superman';
superman.realName = 'Clark Kent';

const batman = Object.create(Superhuman);
batman.name = 'Batman';
batman.realName = 'Bruce Wyane';

const wonderWoman = Object.create(Superhuman);
wonderWoman.name = 'Wonder Woman';
wonderWoman.realName = 'Dianna Price';

superman.friends = [batman, wonderWoman];

superman.findFriends0 = function() {
    const arrayFriend = [];
    this.friends.forEach(function(friend) {
        arrayFriend.push(`${friend.name} loves ${this.name}`);
    });
    return arrayFriend;
};

test('this in nested functions points to the global object', () => {
    expect(superman.findFriends0()).toEqual(expect.
        arrayContaining([
            'Batman loves nodejs',
            'Wonder Woman loves nodejs'
        ])
    );
});

superman.findFriends1 = function() {
    const that = this;
    let arrayFriend = [];
    this.friends.forEach(function(friend) {
        arrayFriend.push(`${friend.name} loves ${that.name}`);
    });
    return arrayFriend;
};

test('Solution 1: that = this', () => {
    expect(superman.findFriends1()).toEqual(expect.
        arrayContaining([
            'Batman loves Superman',
            'Wonder Woman loves Superman'
        ])
    );
});

superman.findFriends2 = function() {
    let arrayFriend = [];
    this.friends.forEach(function(friend) {
        arrayFriend.push(`${friend.name} loves ${this.name}`);
    }.bind(this));
    return arrayFriend;
};

test('Solution 2: use bind(this)', () => {
    expect(superman.findFriends2()).toEqual(expect.
        arrayContaining([
            'Batman loves Superman',
            'Wonder Woman loves Superman'
        ])
    );
});

superman.findFriends3 = function() {
    let arrayFriend = [];
    for(const friend of this.friends) {
        arrayFriend.push(`${friend.name} loves ${this.name}`);
    }
    return arrayFriend;
};

test('Solution 3: use ES6 for(it of them)', () => {
    expect(superman.findFriends3()).toEqual(expect.
        arrayContaining([
            'Batman loves Superman',
            'Wonder Woman loves Superman'
        ])
    );
});

superman.findFriends4 = function() {
    let arrayFriend = [];
    this.friends.forEach((friend) => {
        arrayFriend.push(`${friend.name} loves ${this.name}`);
    });
    return arrayFriend;
};

test('Solution 4: use ES6 arrow functions', () => {
    expect(superman.findFriends4()).toEqual(expect.
        arrayContaining([
            'Batman loves Superman',
            'Wonder Woman loves Superman'
        ])
    );
});

