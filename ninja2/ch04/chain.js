const numbers = [36,12,5,23,18,7];
console.log(numbers);
const squareSum = numbers.map(n=>n*n).reduce((acc,n)=>acc+n);
console.log(squareSum);