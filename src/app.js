// Menu functionality
import { openCloseMenu, hambIcon, menuLinks } from './menu.js';

// Books functionality
import {
  Book, Store, List, form, bookContainer,
} from './books.js';

// Add Book validation functionality
import {
  titleInput, authorInput, cleanError, titleError, authorError,
} from './validation.js';

// Navbar navigation functionality

import { menuButtons, showSection } from './navigation.js';

// Luxon functionality
import { fullDate, addDateToViewport } from './time.js';

hambIcon.addEventListener('click', openCloseMenu);
menuLinks.forEach((link) => {
  link.addEventListener('click', openCloseMenu);
});

document.addEventListener('DOMContentLoaded', () => {
  List.displayBooks();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');

  if (title.value !== '' && author.value !== '') {
    const book = new Book(title.value, author.value);
    List.addBookToViewport(book);
    Store.setBook(book);
    form.reset();
  } else if (title.value === '') {
    title.style.border = '2px solid red';
    titleError.textContent = 'Please, provide a Title';
  } else if (author.value === '') {
    author.style.border = '2px solid red';
    authorError.textContent = 'Please, provide an Author';
  }
});

bookContainer.addEventListener('click', (e) => {
  Store.removeBook(e.target);
  List.removeBookInViewport(e.target);
});

titleInput.addEventListener('change', (e) => cleanError(e.target));
authorInput.addEventListener('change', (e) => cleanError(e.target));

menuButtons.forEach((menu) => {
  menu.addEventListener('click', (e) => showSection(e));
});

addDateToViewport(fullDate);
