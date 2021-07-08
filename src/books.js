export const form = document.querySelector('.form');
export const bookContainer = document.querySelector('.container');

let booksList = [];

export class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  export class Store {
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
  
  export class List {
    static addBookToViewport = (book) => {
      const item = document.createElement('li');
      item.classList.add('book-item');
  
      item.innerHTML = `
        <p class="book-data">"${book.title}" by ${book.author}</p>
        <button class="btn btn-book">X</button>
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
