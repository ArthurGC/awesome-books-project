export const hambIcon = document.querySelector('.hamb');
export const menu = document.querySelector('.navbar__sub');
export const menuLinks = [...document.querySelectorAll('header nav ul li p')];

export const openCloseMenu = () => {
  menu.classList.toggle('active');
  hambIcon.classList.toggle('fa-bars');
  hambIcon.classList.toggle('fa-times');
};
