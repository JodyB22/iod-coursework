function truncate(str, max) {
    if (str.length > max) {
        return str.slice(0, max) + '...'; 
    } else {
        return str; 
    }
}


console.log(truncate('This text will be truncated if it is too long', 25));
// Output: "This text will be truncat..."


const truncateTernary = (str, max) => 
    str.length > max ? str.slice(0, max) + '...' : str;


console.log(truncateTernary('This text will be truncated if it is too long', 25));
// Output: "This text will be truncat..."
