let menuBtn = document.querySelector('#menuBtn');
let sideNav = document.querySelector('#sideNav');
let menu = document.querySelector('#menu');

let state = {
	true: {
		size: '0',
		img: './assets/img/close.png'
	},
	false: {
		size: '-250px',
		img: './assets/img/menu.png'
	}
}

sideNav.style.right = state[false].size;


menuBtn.onclick = e => {
	let stateBtn =
	sideNav.style.right == state[false].size ?
	true :
	false;

	sideNav.style.right = state[stateBtn].size;
	menu.src = state[stateBtn].img;
}
