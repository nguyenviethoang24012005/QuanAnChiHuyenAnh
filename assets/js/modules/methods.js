import apis from './apis.js';

export let GET = callback => 
	fetch(apis)
		.then(apis => apis.json())
		.then(callback)
		.catch(e => console.log(e));

export function POST(data, callback){
	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	};
	fetch(apis, options)
		.then(res => res.json())
		.then(callback)
		.catch(e => console.log(e))
}

export function DELETE(id){
	let options = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	};
	fetch(`${apis}/${id}`, options)
		.then(res => res.json())
		// .then(() => GET(render))
		.then(() => {
			let remove = document.getElementById(`item${id}`);

			if(remove)
				remove.remove();
		})
		.catch(e => console.log(e))
}