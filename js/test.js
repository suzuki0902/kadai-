document.addEventListener('DOMContentLoaded', function() {
	const hamburger = document.querySelector('.js-hamburger');
	const gmenu = document.querySelector('.p-gmenu');
	const body = document.body;
  
	hamburger.addEventListener('click', function() {
	  this.classList.toggle('is-open');
	  gmenu.classList.toggle('is-open');
	  body.classList.toggle('is-open');
	});
  });