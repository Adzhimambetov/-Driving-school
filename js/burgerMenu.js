const myButton = document.querySelector('.header__burger');
const menu = document.querySelector('.nav-mobile');
myButton.addEventListener('click', function () {
  myButton.classList.toggle('close');
  menu.classList.toggle('nav-mobile--open');
});
