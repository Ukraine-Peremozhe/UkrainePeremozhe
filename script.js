const mobileMenu = document.querySelector('.mobileMenu');
const closeMenu = document.querySelector('.closeMenu');
const mobileMenuBody = document.querySelector('.mobileMenuBody');
const dropdownarrow = document.getElementById('dropdownarrow');
const extraInformation = document.querySelector('.extraInformation');
const contactUkrainePeremozhe = document.querySelector('.contactUkrainePeremozhe');
const main = document.getElementById('main');
let count = 0;
const a = window.matchMedia("(max-width: 1250px)");
const b = window.matchMedia("(max-width: 860px)");
const c = window.matchMedia("(max-width: 530px)");

mobileMenu.addEventListener('click', () => {
	mobileMenu.style.display = 'none'
	mobileMenuBody.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
	mobileMenuBody.style.display = 'none';
	mobileMenu.style.display = 'block';
});

dropdownarrow.addEventListener('click', () => {
	count++;
	if(count % 2 == 0) {
		dropdownarrow.style.transform = 'rotate(360deg)';
		extraInformation.style.transition = '0.5s';
		extraInformation.style.height = '273px';
		main.style.marginTop = '0px';
		if(a.matches) {
			contactUkrainePeremozhe.style.top = '3rem';
		} if(c.matches) {
			contactUkrainePeremozhe.style.top = '25rem';
		};
	} else {
		dropdownarrow.style.transition = '0.5s';
		dropdownarrow.style.transform = 'rotate(180deg)';
		extraInformation.style.transition = '0.5s';
		extraInformation.style.height = '46px';
		main.style.marginTop = '14rem';
		if(a.matches) {
			contactUkrainePeremozhe.style.top = '-15rem';
		} if(b.matches) {
			main.style.marginTop = '0px';
			contactUkrainePeremozhe.style.top = '3rem';
		  } if(c.matches) {
		  	contactUkrainePeremozhe.style.top = '25rem';
		    }
	};
});