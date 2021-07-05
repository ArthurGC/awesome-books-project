import { booksList } from "./books.js";

const form = document.querySelector("#form");
const bookContainer = document.querySelector(".container");

const getBookData = () => {
    let books;
    if (localStorage.getItem("BooksData") != null) {
      books = JSON.parse(localStorage.getItem("BooksData"));
    } else {
      books = booksList;
    }
  
    return books;
  };

// const setBook = (book) => {
//   const books = getBookData();
//   books.push(book);
//   localStorage.setItem("BooksData", JSON.stringify(books));
// };

// const removeBook = (element) => {
//   const books = getBookData();
//   let position =
//     Array.prototype.indexOf.call(
//       bookContainer.childNodes,
//       element.parentElement
//     ) - 1;

//   if (element.classList.contains("btn")) {
//     books.forEach((book, index) => {
//       if (position == index) {
//         books.splice(index, 1);
//       }
//       localStorage.setItem("BooksData", JSON.stringify(books));
//     });
//   }
// };

const addBookToViewport = (book) => {
    const item = document.createElement("li");
  
    item.innerHTML = `
          <p>${book.title} by ${book.author}</p>
          <button class="btn">Remove</button>
          `;
  
    bookContainer.appendChild(item);
  };
