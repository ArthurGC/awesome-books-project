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
