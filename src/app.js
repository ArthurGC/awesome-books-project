// Menu Import
import { openCloseMenu, hambIcon, menuLinks } from './menu.js';

// Books Import
import {
  Book, Store, List, form, bookContainer,
} from './books.js';

// Book validation Import
import {
  titleInput, authorInput, cleanError, titleError, authorError,
} from './validation.js';

// Navbar navigation Import

import { menuButtons, showSection } from './navigation.js';

// Luxon Import
import { fullDate, addDateToViewport } from './time.js';

// Menu functionality Start

hambIcon.addEventListener('click', openCloseMenu);
menuLinks.forEach((link) => {
  link.addEventListener('click', openCloseMenu);
});

// Menu functionality End

// Books functionality Start

document.addEventListener('DOMContentLoaded', () => {
  List.displayBooks();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');

  let titleValue = title.value.trim();
  let authorValue = author.value.trim();

  if (titleValue !== '' && authorValue !== '') {
    const book = new Book(title.value, author.value);
    List.addBookToViewport(book);
    Store.setBook(book);
    form.reset();
  } else if (titleValue === '') {
    title.style.border = '2px solid red';
    titleError.textContent = 'Please, provide a Title';
  } else if (authorValue === '') {
    author.style.border = '2px solid red';
    authorError.textContent = 'Please, provide an Author';
  }
});

bookContainer.addEventListener('click', (e) => {
  Store.removeBook(e.target);
  List.removeBookInViewport(e.target);
});

// Books functionality End

// Add Book validation functionality Start

titleInput.addEventListener('change', (e) => cleanError(e.target));
authorInput.addEventListener('change', (e) => cleanError(e.target));

// Add Book validation functionality End

// Navbar navigation functionality Start

menuButtons.forEach((menu) => {
  menu.addEventListener('click', (e) => showSection(e));
});

// Navbar navigation functionality End

// Luxon Date and Time Start

addDateToViewport(fullDate);

// Luxon Date and Time End
