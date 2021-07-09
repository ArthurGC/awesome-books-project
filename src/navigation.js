const listSection = document.querySelector('.books');
const addSection = document.querySelector('.add');
const contactSection = document.querySelector('.contact');
export const menuButtons = [...document.querySelectorAll('.navbar__sub li p')];

export const showSection = (e) => {
  if (e.target.dataset.id === '1') {
    listSection.style.display = 'block';
    addSection.style.display = 'none';
    contactSection.style.display = 'none';
  } else if (e.target.dataset.id === '2') {
    listSection.style.display = 'none';
    addSection.style.display = 'block';
    contactSection.style.display = 'none';
  } else if (e.target.dataset.id === '3') {
    listSection.style.display = 'none';
    addSection.style.display = 'none';
    contactSection.style.display = 'block';
  }
};
