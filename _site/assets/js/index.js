const navbar = document.querySelector('.sf-navbar');

window.addEventListener('scroll', function(){
	if(navbar.getBoundingClientRect().top <= 0) {
		navbar.classList.add('sf-fixed');
	}
	if (document.querySelector('.sf-masthead').getBoundingClientRect().bottom >= 150) {
		navbar.classList.remove('sf-fixed');
	}
});