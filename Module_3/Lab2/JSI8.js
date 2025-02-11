// Create and initialize the Maps
const phoneBookABC = new Map();
phoneBookABC.set('Annabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182');

const phoneBookDEF = new Map([
    ['David', '0478312345'],
    ['Eva', '0412345678'],
    ['Frank', '0498765432']
]);

phoneBookABC.set('Caroline', '0455221199'); 

function printPhoneBook(contacts) {
    contacts.forEach((phoneNumber, name) => {
        console.log(`${name}: ${phoneNumber}`);
    });
}


const phoneBook = new Map(phoneBookABC);
phoneBookDEF.forEach((value, key) => {
    phoneBook.set(key, value);
});


console.log("Full list of names in the combined phone book:");
for (const name of phoneBook.keys()) {
    console.log(name);
}


console.log("\nComplete Phone Book:");
printPhoneBook(phoneBook);
