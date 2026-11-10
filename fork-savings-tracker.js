let goal = 40000;
let bank = 0;

while (bank < goal) {
    let a = Number(prompt("Сколько сегодня кладём?"));
    bank += a;
}

alert(bank > goal ? "Хватило на вилку, и даже на ТО хватит!" : "Хватило в притык");