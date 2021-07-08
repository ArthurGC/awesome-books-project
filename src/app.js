// Menu functionality
import { openCloseMenu, hambIcon, menuLinks } from './menu.js';

hambIcon.addEventListener('click', openCloseMenu);
menuLinks.forEach((link) => {
  link.addEventListener('click', openCloseMenu);
});

// Books functionality
import {Book, Store, List, form, bookContainer} from './books.js';

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

// Navbar navigation functionality

import {menuButtons, showSection} from './navigation.js'

menuButtons.forEach((menu) => {
    menu.addEventListener('click', (e) => showSection(e));
  });

// Luxon functionality
import {fullDate, addDateToViewport} from './time.js'

addDateToViewport(fullDate);
