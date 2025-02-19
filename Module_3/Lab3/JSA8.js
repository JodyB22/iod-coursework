
function validateStringArg(fn) {
    return function (...args) {
        if (!args.every(arg => typeof arg === "string")) {
            throw new Error("All arguments must be strings.");
        }
        return fn(...args);
    };
}


function orderItems(...itemNames) {
    return `Order placed for: ${itemNames.join(", ")}`;
}


const validatedOrderItems = validateStringArg(orderItems);


try {
    console.log(validatedOrderItems("Apple Watch", "MacBook Pro")); 
} catch (error) {
    console.error(`Error: ${error.message}`);
}

try {
    console.log(validatedOrderItems("iPhone", 123, "AirPods")); 
} catch (error) {
    console.error(`Error: ${error.message}`);
}

try {
    console.log(validatedOrderItems("Galaxy Watch", "Pixel Buds")); 
    console.error(`Error: ${error.message}`);
}

try {
    console.log(validatedOrderItems(42)); 
} catch (error) {
    console.error(`Error: ${error.message}`);
}

