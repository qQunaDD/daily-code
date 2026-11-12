let a = Number(prompt());
let sum = 0;

for (let i = 1; i <= a; i+=2) {
    sum += i;
}
console.log("Сумма нечетных чисел от 1 до", a, "равна", sum);