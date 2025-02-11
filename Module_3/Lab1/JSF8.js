
function logCityInfo(city) {
    for (let property in city) {
        console.log(`${property}: ${city[property]}`);
    }
}


const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
};

console.log("Sydney Info:");
logCityInfo(sydney);

const tokyo = {
    name: 'Tokyo',
    population: 13_960_000,
    country: 'Japan',
    founded: 'May 1, 1943',
    timezone: 'Asia/Tokyo'
};

console.log("\nTokyo Info:");
logCityInfo(tokyo);
