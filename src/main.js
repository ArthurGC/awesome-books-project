let booksList = [];

const form = document.querySelector('#form');
const bookContainer = document.querySelector('.book-container');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Store {
  static getBookData = () => {
    let books;
    if (localStorage.getItem('BooksData') != null) {
      books = JSON.parse(localStorage.getItem('BooksData'));
    } else {
      books = booksList;
    }
    return books;
  };

  static setBook = (book) => {
    const books = Store.getBookData();
    books.push(book);
    booksList = books;
    localStorage.setItem('BooksData', JSON.stringify(books));
  };

  static removeBook = (element) => {
    const books = Store.getBookData();
    const position = Array.prototype.indexOf.call(
      bookContainer.childNodes,
      element.parentElement,
    ) - 1;

    if (element.classList.contains('btn')) {
      books.forEach((book, index) => {
        if (position === index) {
          books.splice(index, 1);
        }
        booksList = books;
        localStorage.setItem('BooksData', JSON.stringify(books));
      });
    }
  };
}

class List {
  static addBookToViewport = (book) => {
    const item = document.createElement('li');

    item.innerHTML = `
            <p>${book.title} by ${book.author}</p>
            <button class="btn">Remove</button>
            `;

    bookContainer.appendChild(item);
  };

  static displayBooks = () => {
    const books = Store.getBookData();
    books.forEach((book) => List.addBookToViewport(book));
  };

  static removeBookInViewport = (element) => {
    if (element.classList.contains('btn')) {
      element.parentElement.remove();
    }
  };
}

document.addEventListener('DOMContentLoaded', () => {
  List.displayBooks();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  if (title !== '' && author !== '') {
    const book = new Book(title, author);
    List.addBookToViewport(book);
    Store.setBook(book);
    form.reset();
  }
});

bookContainer.addEventListener('click', (e) => {
  Store.removeBook(e.target);
  List.removeBookInViewport(e.target);
});
