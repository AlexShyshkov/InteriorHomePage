'use strict'

window.addEventListener('DOMContentLoaded', function(){
	let slideIndex = 1;
	let slides = document.querySelectorAll('.')
	let previous = document.querySelector('.left');
	let next = document.querySelector('.right');
	let dotsWrap = document.querySelector('.slider-pagination');
	let dots = document.querySelectorAll('.circle');

	function showSlide(slideNumber){
		if(slideNumber > slides.length){
			slideIndex = 1;
		}
		if(slideNumber < 1){
			slideIndex = slides.length;
		}

		for(let i = 0; i < slides.length; i++){
			slides[i].style.display = 'none';
		}

		for(let i = 0; i < dots.length; i++){
			dots[i].classList.remove('circle-active');
		}

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('circle-active');
	}

	function showNextSlide(n){
		showSlide(slideIndex += n);
	}

	function currentSlide(n){
		showSlide(slideIndex = n);
	}

	showSlide(slideIndex);
	previous.addEventListener('click', function(){
		showNextSlide(-1);
	});
	next.addEventListener('click', function(){
		showNextSlide(1);
	});
	dotsWrap.addEventListener('click', function(event){
		for(let i = 0; i < dots.length + 1; i++){
			if(event.target.classList.contains('circle') 
				&& event.target == dots[i - 1]){
					currentSlide(i);
			}
		}
	});
});