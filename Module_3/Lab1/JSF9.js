
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };


let moreSports = teamSports;
moreSports.push('Football');
moreSports.unshift('Tennis');


let dog2 = dog1;
dog2 = 'Rex';  


let cat2 = cat1;
cat2.name = 'Whiskers';  


console.log('teamSports:', teamSports); 
console.log('dog1:', dog1);            
console.log('cat1:', cat1);             


let independentSports = [...teamSports]; 
independentSports.push('Basketball'); 

let independentCat = { ...cat1 }; 
independentCat.name = 'Shadow'; 

console.log('Updated independentSports:', independentSports);
console.log('Original teamSports after independentSports change:', teamSports);

console.log('Updated independentCat:', independentCat);
console.log('Original cat1 after independentCat change:', cat1);