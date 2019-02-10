const values = [0, 1, '0', false, true, 'false'];
console.log(values);
const truethy = values.filter(Boolean);
console.log(truethy);
const falsy = values.filter(x => !x);
console.log(falsy);