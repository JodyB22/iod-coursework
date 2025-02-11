function ucFirstLetters(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
              .join(' '); 
}

// Test cases
console.log(ucFirstLetters("los angeles"));       // Output: "Los Angeles"
console.log(ucFirstLetters("new york city"));     // Output: "New York City"
console.log(ucFirstLetters("hello world"));       // Output: "Hello World"
console.log(ucFirstLetters("san francisco bay"));// Output: "San Francisco Bay"
