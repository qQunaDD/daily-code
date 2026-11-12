const budget = Number(prompt("Ваш бюджет на сборку?"));
const parts = Number(prompt("Количество компонентов в сборке?"));
let topParts = 0;
let price = 0;
let sum = 0;

if (budget <= 0 || parts <= 0) {
	alert("Ошибка ввода. Попробуйте ещё раз.")
} else {
	for (let i = 1; i <= parts; i++) {
		price = Number(prompt("Введите цену компонента:"));
			if (price > 15000) {
				topParts++;
			}
		sum += price;
	}
	if (sum > 50000 && topParts >= 1) {
		alert("Поздравляем! Вы заслужили скидку в 10%!")
		sum *= 0.9;
	}
	let result = budget >= sum ? `Вам хватает денег на эту сборку!` : `Вам не хватает ${sum - budget} рублей на эту сборку :(`;

	alert(`Итоговая стоимость сборки: ${sum}\nКоличество топовых компонентов: ${topParts}\n${result}\n`);
}