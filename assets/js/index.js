// import $ from 'jQuery';

const navbar = document.querySelector('.sf-navbar');

const bodyHeight = document.body.getBoundingClientRect().height;
const mastheadHeight = document.querySelector('.sf-masthead').getBoundingClientRect().height;

const totalToScroll =  bodyHeight - mastheadHeight;
// const newZero = mastheadHeight - 115;

window.addEventListener('scroll', function(){
	if(navbar.getBoundingClientRect().top <= 0) {
		navbar.classList.add('sf-fixed');
		const percent = (window.scrollY * 100 ) / totalToScroll;
		const alphaValue = percent / 100;
		document.querySelector('.sf-fixed').style.backgroundColor =	'rgba(15, 8, 75,' + alphaValue + ')';
	}
	if (document.querySelector('.sf-masthead').getBoundingClientRect().bottom >= 115) {
		navbar.classList.remove('sf-fixed');
		navbar.style.backgroundColor =	'rgba(15, 8, 75, 0)';
	}
});


$(".tab").on("click", function (e) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($(this).parent().attr('href')).offset().top,
  }, 700);
});

$(".sf-logo-mini").on("click", function (e) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: 0,
  }, 700);
});
