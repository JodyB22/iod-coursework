function makeCounter(startFrom = 0, incrementBy = 1) {
    let currentCount = startFrom;
    return function() {
        currentCount += incrementBy;
        console.log(currentCount);
        return currentCount;
    };
}

let counter1 = makeCounter(); 
counter1(); // 1
counter1(); // 2

let counter2 = makeCounter(10, 2); 
counter2(); // 12
counter2(); // 14
