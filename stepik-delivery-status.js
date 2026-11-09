const weight = Number(prompt());
const delivery = prompt();

if (weight <= 5) {
    if (delivery === "экспресс") {
        console.log("Стоимость доставки:", 1000, "рублей");
    } else if (delivery === "обычная") {
            console.log("Стоимость доставки:", 500, "рублей");
    } else {
        console.log("Некорректный статус доставки");
    }
} else if (weight > 5) {
    if (delivery === "экспресс") {
        console.log("Стоимость доставки:", 1500, "рублей");
    } else if (delivery === "обычная") {
            console.log("Стоимость доставки:", 800, "рублей");
    } else {
    console.log("Некорректный статус доставки");
    }
}