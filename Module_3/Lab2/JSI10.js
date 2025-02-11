const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');

const hours = today.getHours();
const minutes = today.getMinutes();
const totalMinutes = hours * 60 + minutes;
console.log(totalMinutes + ' minutes have passed so far today');

const seconds = today.getSeconds();
const totalSeconds = hours * 3600 + minutes * 60 + seconds;
console.log(totalSeconds + ' seconds have passed so far today');

const birthDate = new Date('1996-06-23'); // Replace with your birthdate
let years = today.getFullYear() - birthDate.getFullYear();
let months = today.getMonth() - birthDate.getMonth();
let days = today.getDate() - birthDate.getDate();

if (months < 0) {
  years--;
  months += 12;
}
if (days < 0) {
  months--;
  const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
  days += lastMonth.getDate();
}

console.log(`I am ${years} years, ${months} months, and ${days} days old`);

function daysInBetween(date1, date2) {
  const msInDay = 24 * 60 * 60 * 1000;
  const difference = Math.abs(date2 - date1);
  return Math.floor(difference / msInDay);
}

const date1 = new Date('2020-01-01');
const date2 = new Date('2025-02-11');
console.log(`There are ${daysInBetween(date1, date2)} days between the two dates.`);
