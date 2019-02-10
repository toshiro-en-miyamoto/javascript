const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman', 'Supergirl', 'Superboy'],
    fly() { console.log('Up, up and away!'); }
};

for(key in superman)
    console.log(`${key} : ${superman[key]}`);

// ES2017
for(const [key, value] of Object.entries(superman))
    console.log(`${key}: ${value}`);