let twentyCents = 0.20;
let tenCents = 0.10;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`); //0.2 + 0.1 = 0.30000000000000004




function currencyAddition(float1, float2) {
    const factor = 100;  // Multiplies by 100 for two decimal places
    return (Math.round(float1 * factor) + Math.round(float2 * factor)) / factor;
}

console.log(0.3 == currencyAddition(0.1, 0.2));  // true



function currencyOperation(float1, float2, operation) {
    const factor = 100;  // Same factor as before (2 decimal places)

    let result;
    switch (operation) {
        case '+':
            result = (Math.round(float1 * factor) + Math.round(float2 * factor)) / factor;
            break;
        case '-':
            result = (Math.round(float1 * factor) - Math.round(float2 * factor)) / factor;
            break;
        case '*':
            result = (Math.round(float1 * factor) * Math.round(float2 * factor)) / (factor * factor);
            break;
        case '/':
            result = (Math.round(float1 * factor) / Math.round(float2 * factor)) * factor;
            break;
        default:
            throw new Error("Invalid operation");
    }
    return result;
}

console.log(0.3 == currencyOperation(0.1, 0.2, '+'));  // true
console.log(0.1 == currencyOperation(0.3, 0.2, '-'));  // true
console.log(0.02 == currencyOperation(0.1, 0.2, '*'));  // true
console.log(0.5 == currencyOperation(1, 2, '/'));  // true





function currencyOperationWithDecimals(float1, float2, operation, numDecimals = 2) {
    const factor = Math.pow(10, numDecimals);  // Multiplies by 10^numDecimals

    let result;
    switch (operation) {
        case '+':
            result = (Math.round(float1 * factor) + Math.round(float2 * factor)) / factor;
            break;
        case '-':
            result = (Math.round(float1 * factor) - Math.round(float2 * factor)) / factor;
            break;
        case '*':
            result = (Math.round(float1 * factor) * Math.round(float2 * factor)) / (factor * factor);
            break;
        case '/':
            result = (Math.round(float1 * factor) / Math.round(float2 * factor)) * factor;
            break;
        default:
            throw new Error("Invalid operation");
    }
    return result;
}


console.log(0.3 == currencyAddition(0.1, 0.2));  // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+'));  // true


console.log(0.02 == currencyOperationWithDecimals(0.1, 0.2, '*', 2));  // true
console.log(0.02 == currencyOperationWithDecimals(0.1, 0.2, '*', 3));  // true
console.log(1.00 == currencyOperationWithDecimals(10, 2, '/', 2));  // true