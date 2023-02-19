const menuBtn = document.querySelector('.mobile-nav-icon');
const nav = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('mobile-active');
  menuBtn.classList.toggle('fa-bars');
  menuBtn.classList.toggle('fa-times');
});

// ToDo 1. Add scroll blocking when menu is opened
// ToDo 2. Close menu, when click on item-menu & unblocking scroll