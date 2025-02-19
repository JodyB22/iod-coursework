
function debounce(func, ms = 1000) {
    let timeoutId;

    return function(...args) {
       
        clearTimeout(timeoutId);

       
        timeoutId = setTimeout(() => {
            func(...args); 
        }, ms);
    };
}


function printMe(msg) {
    console.log(`Printing debounced message: ${msg}`);
}


const debouncedPrintMe = debounce(printMe);


setTimeout(() => debouncedPrintMe('Call 1'), 100);
setTimeout(() => debouncedPrintMe('Call 2'), 200);
setTimeout(() => debouncedPrintMe('Call 3'), 300);


const debouncedPrintMeWithDelay = debounce(printMe, 500);


setTimeout(() => debouncedPrintMeWithDelay('Message with custom delay 1'), 100);
setTimeout(() => debouncedPrintMeWithDelay('Message with custom delay 2'), 200);
setTimeout(() => debouncedPrintMeWithDelay('Message with custom delay 3'), 300);
