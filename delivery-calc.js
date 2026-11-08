if (price <= 0 || distance <= 0) {
	alert("Ошибка ввода");
} else if (price >= 15000 && distance <= 30) {
	alert("Доставка бесплатная!");
} else if (distance <= 10) {
	alert("Доставка стоит 300 рублей");
} else if (distance <= 50) {
	alert("Доставка стоит 700 рублей");
} else {
	alert("Доставка стоит 1500 рублей");
}