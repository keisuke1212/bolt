var humberger = document.querySelector('.headerMenu__humberger');
var menu = document.querySelector('.headerMenu');

humberger.addEventListener('click', function() {
  menu.classList.toggle('is-active');
});