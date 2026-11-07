const budget = Number(prompt("Ваш бюджет:"));
let frame = 0;

for (let i = 1; i <= 5; i++) {
	let price = Number(prompt("Цена рамы:"));
	let size = prompt("Размер рамы:");
	if ((price <= budget) && (size == "l" || size == "m" || size == "L" || size == "M")) {
		alert("Рама №" + i + " добавлена в избранное");
		frame++;
	} else {
		alert("Не подходит");
	}
}

alert("Вам подходит: " + frame + " рам");