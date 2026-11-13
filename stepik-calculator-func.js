let a = Number(prompt());
let b = Number(prompt());
let operation = prompt();

makeOperation(a, b, operation);

function makeOperation(a, b, operation) {
    if (operation === "+") {
        console.log(a + b);
    } else if (operation === "-") {
        console.log(a - b);
    } else if (operation === "*") {
        console.log(a * b);
    } else if (operation === "/") {
        console.log(a / b);
    } else {
        console.log("Неверный оператор");
    }
}