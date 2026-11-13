let a = Number(prompt());
let b = Number(prompt());

biggestNumber(a, b);

function biggestNumber(a, b) {
    if (a > b) {
        console.log(a + " больше, чем " + b);
    } else if (b === a) {
        console.log(b + " равно " + a);
    } else {
        console.log(b + " больше, чем " + a);
    }
}