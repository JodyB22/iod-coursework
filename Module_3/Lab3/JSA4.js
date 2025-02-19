
function printFibonacci(limit) {
    let a = 1, b = 1;
    let count = 0; 

    let intervalId = setInterval(() => {
        if (count < limit) {
            console.log(a);  
            let nextNumber = a + b;
            a = b;
            b = nextNumber;
            count++;
        } else {
            clearInterval(intervalId); 
        }
    }, 1000);
}


printFibonacci(5);  



function printFibonacciTimeouts(limit) {
    let a = 1, b = 1;
    let count = 0; 

    function printNextFibonacci() {
        if (count < limit) {
            console.log(a);  
            let nextNumber = a + b;
            a = b;
            b = nextNumber;
            count++;
            setTimeout(printNextFibonacci, 1000); 
        }
    }

   
    if (limit > 0) {
        setTimeout(printNextFibonacci, 1000); // Delay the first print by 1 second
    }
}


printFibonacciTimeouts(5);  // Output: 1, 1, 2, 3, 5 (each printed 1 second apart)
