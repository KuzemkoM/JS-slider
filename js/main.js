$(document).ready(function(){
  $('.slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	infinite: true,
	speed: 500,
	prevArrow: '<img class="slick-prev" src="img/prev.png">',
	nextArrow: '<img class="slick-next" src="img/next.png">'
  });
});