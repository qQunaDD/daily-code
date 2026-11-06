const raw = prompt("Ввведите N от 1 до 20");
let sum = 0;

if (raw === "" || raw === null) {
} else if (raw >= 1 && raw <= 20) {
	const num = Number(raw);
	for (let i = 1; i <= raw; i++) {
		sum += i;
	}
	alert(sum);
}