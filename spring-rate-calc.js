const weight = Number(prompt("Введите свой вес в кг (в экипе):"));

if (weight <= 0 || weight > 200) {
	alert("Ошибка ввода");
} else if (weight <= 65) {
	alert("Ставь пружину 350 lbs");
} else if (weight <= 80) {
	alert("Ставь пружину 450 lbs");
} else if (weight <= 95) {
	alert("Ставь пружину 550 lbs");
} else {
	alert("Ставь пружину 650 lbs");
}