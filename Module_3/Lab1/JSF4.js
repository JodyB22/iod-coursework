a = 7; b = 5;
result = `${a} + ${b} is ` + ((a + b) < 10 ? 'less than 10' : 'greater than 10');
console.log(result); // Output: "7 + 5 is greater than 10"

a = 4; b = 4;
result = `${a} + ${b} is ` + ((a + b) < 10 ? 'less than 10' : 'greater than 10');
console.log(result); // Output: "4 + 4 is less than 10"
