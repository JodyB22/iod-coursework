let car = {
    make: "Porsche",
    model: '911',
    year: 1964,

    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

setTimeout(() => car.description(), 200);


let carClone = Object.assign({}, car, { year: 2020 });
carClone.description(); 


let boundDescription = car.description.bind(car);
setTimeout(boundDescription, 200);


let carClone2 = Object.assign({}, car, { model: '911 Turbo' });
setTimeout(boundDescription, 200); 
