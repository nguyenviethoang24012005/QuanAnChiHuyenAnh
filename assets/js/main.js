// import render from './modules/coin.js';
import { GET } from './modules/methods.js';
import render from './modules/render.js';

function start(){
	// GET(data => console.log(data));
	// GET(course => render(course));
	GET(render);
}

start();