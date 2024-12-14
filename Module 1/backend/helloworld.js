console.log('Hello world');

const Sentiment = require('sentiment');


const sentiment = new Sentiment();
const result = sentiment.analyze('dogs are great')

console.log (result);



function multiply(a, b){
    return a * b;
}
console.log (multiply(3,6))
