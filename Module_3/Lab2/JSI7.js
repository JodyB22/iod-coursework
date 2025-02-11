function getBookTitle(bookId) {
    const book = books.find(b => b.id === bookId);
    return book ? book.title : 'Book not found';
}
function getOldBooks() {
    return books.filter(b => b.year < 1950);
}
function addGenre() {
    return books.map(b => ({ ...b, genre: 'classic' }));
}

function getTitles(authorInitial) {
    return books
        .filter(b => b.author[0].toLowerCase() === authorInitial.toLowerCase())
        .map(b => b.title);
}

function latestBook() {
    let latest = books[0];

    books.forEach(b => {
        if (b.year > latest.year) {
            latest = b;
        }
    });

    return latest;
}


const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  ];

console.log(getBookTitle(3)); // '1984'
console.log(getBookTitle(6)); // 'Book not found'
console.log(getOldBooks()); // great gatsby, 1984, brave new world
console.log(addGenre()); // The Catcher in the Rye, Brave New World, 1984, To Kill a Mockingbird, The Great Gatsby
console.log(getTitles('H')); // To Kill a Mockingbird
console.log(getTitles('F')); // The Great Gatsby
console.log(latestBook()); // To Kill a Mockingbird