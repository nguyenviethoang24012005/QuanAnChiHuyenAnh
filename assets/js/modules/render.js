import { showNum } from './transCoin.js';

function listItem(times, year){
	let list__items = times.month.map(month => {
		if(month.year == year)
		return `
		<div class="col l-3 m-6 c-12">
			<div class="month">
				<h2 class="month__title">tháng ${month.month}</h2>
				<div class="month__content">
					<h3 class="month__coin">
						<span class="goal__coin--month">mục tiêu:</span>
						<div class="coin">
							<span>${showNum(month.goal)}</span>
							<span>vnđ</span>
						</div>
					</h3>
					<h3 class="month__coin">
						<span class="goal__coin--month">đã kiếm:</span>
						<div class="coin">
							<span>${showNum(month.make)}</span>
							<span>vnđ</span>
						</div>
					</h3>
					<h3 class="month__coin">
						<span class="goal__coin--month">tổng:</span>
						<div class="coin">
							<span>${showNum(month.sum)}</span>
							<span>vnđ</span>
						</div>
					</h3>
				</div>	
			</div>
		</div>
	`});
	return list__items.join('');
}


function render(times){
	let list = document.querySelector(".content > .grid.wide");
	if(list){
	let htmls = times.years.map(year => `
	<div class="years">
		<!-- year content -->
		<div class="year">
			<div class="row">
				<div class="col l-3 m-3 c-12">
					<h1 class="year__time">Năm ${year.year}</h1>
				</div>
				<div class="col l-7 m-8 c-12">
					<h1 class="year__goal">
						<span class="goal__coin--year">mục tiêu:</span>
						<div class="coin">
							<span>${showNum(year.goals)}</span>
							<span>vnđ</span>
						</div>
					</h1>
					<h1 class="year__goal">
						<span class="goal__coin--year">đã đạt:</span>
						<div class="coin">
							<span>${showNum(year.makes)}</span>
							<span>vnđ</span>
						</div>
					</h2>
				</div>
			</div>
		</div>

		<!-- months contentn -->
		<div class="months">
			<div class="row">
				${listItem(times, year.year)}
			</div>
		</div>			
	</div>
	`);

	list.innerHTML = htmls.join("");
	}
}

export default render;