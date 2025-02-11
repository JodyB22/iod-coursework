
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;

    this.canDrive = function() {
        return this.age >= 18;
    };
}


let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 16);

console.log(`${person1.name}, Age: ${person1.age}, Can Drive: ${person1.canDrive()}`);
console.log(`${person2.name}, Age: ${person2.age}, Can Drive: ${person2.canDrive()}`);


class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

    canDrive() {
        return this.age >= 18;
    }
}


let person3 = new PersonClass("Charlie", 20);


console.log(`${person3.name}, Age: ${person3.age}, Can Drive: ${person3.canDrive()}`);
