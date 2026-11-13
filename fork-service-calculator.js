let price = Number(prompt("Цена переборки?"));
let service = prompt("Нужна ли замена сальников?");

workshop(price, service);

function workshop (price, service) {
    let finalPrice = price;
    if (service === "да" || service === "Да") {
        finalPrice += 2500;
    }
    alert(`Итоговая цена ТО: ${finalPrice}`);
}