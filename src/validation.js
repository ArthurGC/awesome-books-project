export const titleInput = document.querySelector('#title');
export const authorInput = document.querySelector('#author');
export const titleError = document.querySelector('.error-title');
export const authorError = document.querySelector('.error-author');

export const cleanError = (element) => {
  element.style.border = '';

  if (element.id === 'title') {
    titleError.textContent = '';
  } else {
    authorError.textContent = '';
  }
};
