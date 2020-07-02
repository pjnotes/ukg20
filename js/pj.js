$(function () {
	new Swiper(".swiper-container-h", {
		spaceBetween: 50,
		loop: !0,
		grabCursor: !0,
		pagination: {
			el: ".swiper-pagination-h",
			clickable: !0,
			type: "fraction"
		}
	}), new Swiper(".swiper-v-cont", {
		direction: "vertical",
		spaceBetween: 50,
		pagination: {
			el: ".swiper-v-page",
			clickable: !0
		}
	});
	console.log("jQuery Ended!!")
});