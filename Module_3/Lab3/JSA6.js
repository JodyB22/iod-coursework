
Function.prototype.delay = function (ms) {
    return (...args) => {
        setTimeout(() => {
            this.apply(null, args); 
        }, ms);
    };
};


function multiply(a, b, c = 1, d = 1) {
    console.log(a * b * c * d);
}


multiply.delay(500)(5, 5); // ✅ Prints 25 after 500ms
multiply.delay(1000)(2, 3, 4, 5); // ✅ Prints 120 after 1 second
multiply.delay(2000)(10, 10, 10); // ✅ Prints 1000 after 2 seconds
