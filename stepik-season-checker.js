const month = Number(prompt());
const degree = Number(prompt());

if (month === 12 || month === 1 || month === 2) {
    if (degree <= -25) {
    console.log("Зима (холодная зима)")
    } else {
        console.log("Зима");
    }
}
if (month === 3 || month === 4 || month === 5) {
    if (degree < 15) {
    console.log("Весна (прохладная весна)")
    } else {
        console.log("Весна");
    }
}
if (month === 6 || month === 7 || month === 8) {
    if (degree >= 30) {
    console.log("Лето (жаркое лето)")
    } else {
        console.log("Лето");
    }
}
if (month === 9 || month === 10 || month === 11) {
    if (degree < 0) {
    console.log("Осень (прохладная осень)")
    } else {
        console.log("Осень");
    }
}