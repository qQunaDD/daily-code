let num1 = Number(prompt());
let num2 = Number(prompt());

if (num1 > num2) {
    while (num1 >= num2) {
        if (num1 % 3 === 0) {
            console.log(num1)
        }
        num1--;
    }
} else {
    while (num1 < num2) {
        if (num1 % 3 === 0) {
            console.log(num1);
        }
        num1++;
    }
}