// Write a JavaScript program that:
// Takes an array of numbers
// Filters out numbers greater than 10
// Squares the remaining numbers
// Finds the sum of the squared values using reduce()

let arr=[24,2,5,9,15,36,2];
arr= arr.filter(i=>i>=10);
arr= arr.map(i=>i**2);
const a=arr.reduce((sum, number) => sum + number, 0);
console.log(a);