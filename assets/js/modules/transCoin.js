export let showNum = num => {
	if(num == null) return num;
	
	num = String(num);
	let render = "";
	for(let i = num.length - 1; i >= 0; i--){
		render += num[num.length - i - 1];
		if(i % 3 == 0 && i != 0)
			render += ",";
	}
	return render;
}

export let inputNum = (num = 0) => {
	num = num.trim();
	if(Number.parseInt(num) == num)
		return Number.parseInt(num);

	let numS = 0;
	for(let i = 0; i < num.length; i++)
		if(Number.parseInt(num[i]) == num[i]){
			numS += Number.parseInt(num[i]);
			if(i < num.length - 1) numS *= 10;
		}
	return numS;
}