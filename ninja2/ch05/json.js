const wonderWoman = {
    name: 'Wonder Woman',
    'real name': 'Diana Prince',
    height: 72,
    weight: 165,
    hero: true,
    villain: false,
    allies: ['Wonder Girl', 'Donna Troy', 'Superman'],
    lasso: function() {
        console.log('You will tell the truth!');
    }
};
console.log(wonderWoman);

const json1 = JSON.stringify(wonderWoman);

const object = JSON.parse(json1);
console.log(object);

const json2 = JSON.stringify(object);

console.log(json1);
console.log(json2);
console.log(json1 === json2);