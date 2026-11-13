let delivery = 500;
let discount = 1000;
let total = 0;

function calcBrakesOrder(brakePrice, count) {
    total = brakePrice * count + delivery;
}

calcBrakesOrder(12000, 2);
console.log(`К оплате с учетом скидки: ${total - discount} руб.`); 