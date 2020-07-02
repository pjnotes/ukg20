/*$(document).ready(function(){
	$('.vSlick').slick({
		lazyLoad: 'ondemand',
		vertical: true,
		verticalSwiping:true,
		arrows:false,
		infinite:false,
		dots:true
	});
});*/

$(function() {
	var swiperH = new Swiper('.swiper-container-h', {
		spaceBetween: 50,
		pagination: {
		  el: '.swiper-pagination-h',
		  clickable: true,
		},
	});
	  var swiperV = new Swiper('.swiper-container-v', {
		direction: 'vertical',
		spaceBetween: 50,
		pagination: {
		  el: '.swiper-pagination-v',
		  clickable: true,
		},
	});
});