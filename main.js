// Script for working of the hamburger menu
const menuBtn  = document.querySelector('.menu-btn');
const menuBar  = document.querySelector('.hidden_navbar');
let menuOpen = false;
menuBtn.addEventListener('click', function (e) {
	if(!menuOpen){
		menuBtn.classList.add('open');
		menuBar.style.display = 'flex';
		// document.querySelector('.menu-btn').style.position = 'fixed';
		menuOpen = true;
	}
	else{
		menuBtn.classList.remove('open');
		menuBar.style.display = 'none';
		// document.querySelector('.menu-btn').style.position = 'relative';
		menuOpen = false
	}
});

AOS.init();

// Scripting of the scrollbar starts from here
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onScroll = function () {
	let progressHeight = (window.pageYOffSet/totalHeight) *100
	progress.style.height = progressHeight + '%'
}