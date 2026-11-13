let a = Number(prompt());
let b = Number(prompt());
let c = Number(prompt());
let d = Number(prompt());

compareAndPrintMax(a, b, c, d);

function compareAndPrintMax(a, b, c, d) {
    let biggest = a;
    if (b > biggest) {
        biggest = b;
    }
    if (c > biggest) {
        biggest = c;
    }
    if (d > biggest) {
        biggest = d;
    }
    console.log(biggest);
}