const trail = prompt("Тип трассы (лес, парк):");
const weather = prompt("Погода (сухо, грязь):");

if (trail === "парк") {
	if (weather === "сухо") {
		alert("Ставь полуслики на высоком давлении");
	} else if (weather === "грязь") {
		alert("Лучше не катать, опасно!");
	} 
} else if (trail === "лес") {
	if (weather === "сухо") {
		alert("Ставь универсальную резину");
	} else if (weather === "грязь") {
		alert("Ставь злую грязевую резину");
		}
	} else {
	alert("Неизвестный тип трассы :(");
}