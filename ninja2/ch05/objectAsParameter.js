function greet({greeting='Hello', name, age}) {
    return `${greeting}! My name is ${name} and I am ${age} years old`;
}

console.log(greet({name: 'Bart', age: 18, greeting: 'Howdy'}));
console.log(greet({name: 'Lisa', age: 25}));