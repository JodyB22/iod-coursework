function sumSalaries(salaries) {
    let total = 0;
    for (let salary of Object.values(salaries)) {
        total += salary;
    }
    return total;
}

let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};



function topEarner(salaries) {
    let maxSalary = 0;
    let topName = "";
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            topName = name;
        }
    }
    return topName;
}

console.log(topEarner(salaries)); // Output: Christina

console.log(sumSalaries(salaries)); // Output: 240000
