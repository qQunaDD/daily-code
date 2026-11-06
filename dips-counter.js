const totalRep = Number(prompt("Количество повторений:"));
for (let rep = 1; rep <= totalRep; rep++) {
	if (rep % 3 === 0) {
		console.log("Повторение №", rep, "особый подход)");
	} else {
		console.log("Повторение №", rep, "молодец!)")
	}
}