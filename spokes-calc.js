let budget = Number(prompt("Ваш бюджет:")); // 1000 рублей
let price = Number(prompt("Цена одной упаковки:")); // 350 рублей
let amount = Number(prompt("Кол-во в упаковке:")); // 36 кол-во

const change = budget % price; // Сдача в рублях
const amount2 = (budget - change) / price; // Целевое количество купленных упаковок
const all = amount * amount2 // Число купленных спиц

console.log("Купленно упаковок:", amount2);
console.log("Купленно всего спиц:", all);
console.log("Сдача:", change, "рублей");