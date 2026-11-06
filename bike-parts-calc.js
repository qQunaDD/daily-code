const priceFrame = Number(prompt("Стоимость рамы:"));
const priceFork = Number(prompt("Стоимость вилки:"));
const priceAll = priceFrame + priceFork;

if (priceAll < 0) {
	alert("Цена не может быть меньше нуля");
} else if (priceAll > 150000) {
	alert("Мажорный байк!");
} else {
	alert("Норм рабочий аппарат");
}