let n = Number(prompt());
let bank = 1;
let step = 1;

while (step <= n) {
    bank *= 2;
    step++;
}
console.log(bank);