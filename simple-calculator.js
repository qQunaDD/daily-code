function calculator (a, b, operation) {
    if (operation==="*") {
        return(a * b);
    } else if (operation==="/") {
        return(a / b);
    } else if (operation==="+") {
        return(a + b);
    } else if (operation==="-") {
        return(a - b);
    } else {
        return ("Неизвестная операция");
    }
}

let a = Number(prompt("Введите первое число"));
let operation = prompt("Введите операцию");
let b = Number(prompt("Введите второе число"));
alert("Результат вычисления:" + calculator(a, b, operation));