// const navSlide = () => {
//   const burger = document.querySelector('.js-navbar-toggle i');
//   const nav = document.querySelector('.nav');

//   burger.addEventListener('click', () => {
//     nav.classList.toggle('active');
//   });
// };

// navSlide();

// let mainNav = document.getElementById('.nav');
// let navBarToggle = document.getElementById('.js-navbar-toggle i');

// navBarToggle.addEventListener('click', function () {
//   mainNav.classList.toggle('active');
// });

let navL = document.querySelector('.nav');
let menuS = document.querySelector('.menu-btn');
let cluS = document.querySelector('.close-btn');

menuS.addEventListener('click', function () {
  navL.classList.add('active2');
});

cluS.addEventListener('click', function () {
  navL.classList.remove('active2');
});

function myFunction() {
  var element = document.body;
  element.classList.toggle('dark-mode');
}
