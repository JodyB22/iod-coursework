function unique(duplicatesArray) {
    return [...new Set(duplicatesArray)];
}

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [99, 23, 65, 72, 99, 88, 99, 63, 53, 63];


console.log(unique(colors)); // 'red', 'green', 'blue', 'yellow', 'orange'
console.log(unique(testScores)); //  99, 23, 65, 72, 88, 63, 53


