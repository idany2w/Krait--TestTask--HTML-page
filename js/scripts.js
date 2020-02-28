window.addEventListener('scroll', function(){
	if (window.pageYOffset !== 0){
		document.querySelector('nav.navbar').classList.add('scrolled');
	} else {
		let toggler = document.querySelector('nav.navbar .navbar-toggler.collapsed');
		
		if(toggler){
			document.querySelector('nav.navbar').classList.remove('scrolled');
		};
	};
});

document.querySelector('nav.navbar .navbar-toggler').addEventListener('click', function(e){
	let isCollapsed = e.target.closest('.collapsed'),
		isScrol = window.pageYOffset !== 0;

	if(!isScrol){
		if(isCollapsed){
			document.querySelector('nav.navbar').classList.add('scrolled');
		} else{
			document.querySelector('nav.navbar').classList.remove('scrolled');
		}
	};
},true)

/* Swiper slider */
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 'auto',
	initialSlide: 3,
	centeredSlides: true,
	grabCursor: true,
	setTransition: 300,
	watchOverflow: true,
	effect: 'coverflow',
	updateOnWindowResize: true,
	autoHeight: true,
	coverflowEffect: {
		rotate: 0,
		stretch: 150,
		depth: 200,
		modifier: 1,
		slideShadows: false
	},
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	}
});
