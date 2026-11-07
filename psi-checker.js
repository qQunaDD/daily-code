const psi = Number(prompt("Введите значение PSI:"));

if (psi < 20 || psi > 30) {
	alert("Ехать нельзя!");
} else {
	alert("Давление в норме");
}