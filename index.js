const library = {
    1001: {
        'name': ''
    }
};

class Book {
    constructor(title, date, pages) {
        this.title = title,
        this.releaseDate = date,
        this.numberOfPages = pages
    }
}

let test = new Book("ABC", 1978, 495);

console.log(test);