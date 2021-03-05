import data from './apis.js';

function call(callback = {}){
	let promise = new Promise(resolve => {
		
	});

	fetch(data)
	.then(data => data.json())
	.then(e => callback(e));
	console.log(callback);
	return callback;
}

call();

export default call;