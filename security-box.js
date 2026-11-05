const password = "4321";
let attemps = 3;

while (attemps > 0) {
	let answer = prompt("Введите число");
	if (answer === password) {
		alert("Молодца!");
		break
	} else {
		alert("Не молодца :(");
		attemps--;
		alert("Осталось " + attemps + " попыток");
	}
}

if (attemps > 0) {
	alert("Сейф разблокирован!");
} else {
	alert("Сейф заблокирован!");
}