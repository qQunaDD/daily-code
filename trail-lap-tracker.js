let lap = Number(prompt("Сколько заездов ты завершил?"));
let fastLap = 0;
let normalLap = 0;
let allTime = 0;
let lapTime = 0;

for (let i = 1; i <= lap; i++) {
    lapTime = Number(prompt("Время заезда в секундах?"));
        if (lapTime < 120) {
            alert("Это рекордный темп!");
            fastLap += 1;
        } else {
            alert("Обычный раскаточный спуск.");
            normalLap += 1;
        }
    allTime += lapTime;
}