let x = Number(prompt());
let even = 0;
let odd = 0;

for (let i = 1; i <= x; i++) {
    if (i % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

console.log("Количество четных чисел:", even);
console.log("Количество нечетных чисел:", odd);