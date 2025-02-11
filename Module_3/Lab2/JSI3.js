const animals = ['Tiger', 'Giraffe'];
console.log("Initial array:", animals);


animals.push('Elephant', 'Zebra');
console.log("After adding to the end:", animals);


animals.unshift('Lion', 'Panda');
console.log("After adding to the beginning:", animals);


animals.sort();
console.log("Sorted array:", animals);


function replaceMiddleAnimal(newValue) {
    let middleIndex = Math.floor(animals.length / 2);
    animals[middleIndex] = newValue;
}
replaceMiddleAnimal('Koala');
console.log("After replacing middle animal:", animals);


function findMatchingAnimals(beginsWith) {
    return animals.filter(animal => 
        animal.toLowerCase().startsWith(beginsWith.toLowerCase())
    );
}

console.log(findMatchingAnimals('T')); // ['Tiger']
console.log(findMatchingAnimals('P')); // ['Panda']
console.log(findMatchingAnimals('E')); // ['Elephant']
console.log(findMatchingAnimals('Z')); // ['Zebra']
