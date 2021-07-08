let booksList = [];
var DateTime = luxon.DateTime;
const dt = DateTime.now();
const full_date = dt.toLocaleString(DateTime.DATETIME_MED);

const form = document.querySelector('#form');
const bookContainer = document.querySelector('.book-container');
const date = document.querySelector('#date');

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
      element.parentElement.parentElement,
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
    const item = document.createElement('tr');

    item.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td><button class="btn btn-primary">Remove</button></td>
      `;

    bookContainer.appendChild(item);
  };

  static displayBooks = () => {
    const books = Store.getBookData();
    books.forEach((book) => List.addBookToViewport(book));
  };

  static removeBookInViewport = (element) => {
    if (element.classList.contains('btn')) {
      element.parentElement.parentElement.remove();
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


//Menu Funtionality 

const listSection = document.querySelector('#list');
const addSection = document.querySelector('#add');
const contactSection = document.querySelector('#contact');
const menuButtons = [...document.querySelectorAll('.navbar-nav a')];

const showSection = (e) => {
  e.preventDefault();
  if (e.target.dataset.id === '1') {
    console.log('Right');
    listSection.style.display = 'block';
    addSection.style.display = 'none';
    contactSection.style.display = 'none';
  } else if (e.target.dataset.id === '2') {
    listSection.style.display = 'none';
    addSection.style.display = 'block';
    contactSection.style.display = 'none';
  }else if (e.target.dataset.id === '3') {
    listSection.style.display = 'none';
    addSection.style.display = 'none';
    contactSection.style.display = 'block';
  }

}
menuButtons.forEach(menu => {
  menu.addEventListener('click', (e) => showSection(e));
})

date.innerHTML = `<p>${full_date}</p>`